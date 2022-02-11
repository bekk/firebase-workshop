import { initializeApp } from 'firebase/app'
import {
    GoogleAuthProvider,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInAnonymously,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { 
    addDoc,
    collection,
    connectFirestoreEmulator,
    deleteDoc,
    doc, 
    getDoc, 
    getDocs, 
    getFirestore,
    onSnapshot,
    query, 
    serverTimestamp,
    updateDoc,
    where
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB_AQP7TxCbH0bkReRBRj4HlZ3iHlssxTc',
    authDomain: 'quizgenerator-92f72.firebaseapp.com',
    projectId: 'quizgenerator-92f72',
    appId: '1:648085607305:web:7250540c412d72f0404758'
};

const runWithEmulators = false
const googleProvider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig)
let auth = getAuth(app)
let db = getFirestore(app)

if(runWithEmulators) {
    auth = getAuth()
    db = getFirestore()
    connectFirestoreEmulator(db, 'http://localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost', 9099)    
}

const authenticateAnonymously = () => {
    return signInAnonymously(getAuth(app));
};

const createOrUpdateQuestion = (question, id) => {
    const auth = getAuth();

    if(!auth || !auth.currentUser) {
        return Promise.reject('Du må være innlogget for å lage spørsmål')
    }

    if(id){
        const questionRef = doc(db, 'questions', id)
        return updateDoc(questionRef, {
            updated: serverTimestamp(),
            updatedBy: auth.currentUser.uid,
            ...question})

    }
    const questionsRef = collection(db, 'questions')
    return addDoc(questionsRef, {
        created: serverTimestamp(),
        createdBy: auth.currentUser.uid,
        ...question
    });
};

const getQuestion = (id) => {
    const questionRef = doc(db, 'questions', id)
    return getDoc(questionRef)
}

const getQuestions = () => {
    const questionsRef = collection(db, 'questions')
    return getDocs(questionsRef)
}

const getUsers = () => {
    const usersRef = collection(db, 'users')
    return getDocs(usersRef)
}

const deleteQuestion = (id) => {
    const questionsRef = doc(db, 'questions', id)
    return deleteDoc(questionsRef)
}

const getUser = async (uid) => {
    if(!uid) return
    const q = query(collection(db, 'users'), where('uid', '==', uid));
    const docsSnapshot = await getDocs(q);

    return docsSnapshot.docs[0].data()
}

const streamQuestions = async (snapshot, error, createdBy) => {
    const questionsRef = collection(db, 'questions')
    const user = await getUser(createdBy)

    let questionsQuey = query(questionsRef, where('createdBy', '==', createdBy))

    if(user && user.role == 'admin') {
        questionsQuey = query(questionsRef)
    }

    return onSnapshot(questionsQuey, snapshot, error);
};


const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                role: 'user',
                authProvider: 'google',
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            role: 'user',
            authProvider: 'local',
            email,
        });    
    } catch (err) {
        console.error(err);
    }
};
  
const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (err) {
        console.error(err);
    }
};
  
const logout = () => {
    signOut(auth);
}

const getCurrentUserId = () => {
    const auth = getAuth()
    return auth && auth.currentUser ? auth.currentUser.uid : ''
}

const createQuiz = async () => {

    const questionsSnapshot = await getQuestions()
    const usersSnapshot = await getUsers()

    const questions = []
    questionsSnapshot.forEach(qSnap => {
        usersSnapshot.forEach(uSnap => {
            if(qSnap.data().createdBy === uSnap.data().uid){
                questions.push({
                    title: qSnap.data().title, 
                    answer: qSnap.data().answer, 
                    createdByName: uSnap.data().name
                })
            }
        })
    })

    return questions.sort(() => Math.random() - Math.random()).slice(0, 5)
}

export {
    auth,
    db,
    authenticateAnonymously,
    createOrUpdateQuestion,
    getQuestion,
    getQuestions,
    deleteQuestion,
    streamQuestions,
    logInWithEmailAndPassword,
    signInWithGoogle,
    registerWithEmailAndPassword,
    logout,
    sendPasswordReset,
    onAuthStateChanged,
    getCurrentUserId,
    createQuiz
};