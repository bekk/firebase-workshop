import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInAnonymously,
} from 'firebase/auth'
import { 
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc, 
    getDocs, 
    getFirestore, 
    onSnapshot,
    orderBy,
    query, 
    serverTimestamp,
    updateDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB_AQP7TxCbH0bkReRBRj4HlZ3iHlssxTc',
    authDomain: 'quizgenerator-92f72.firebaseapp.com',
    projectId: 'quizgenerator-92f72',
    storageBucket: 'quizgenerator-92f72.appspot.com',
    messagingSenderId: '648085607305',
    appId: '1:648085607305:web:7250540c412d72f0404758'
};

export const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const authenticateAnonymously = () => {
    return signInAnonymously(getAuth(app));
};

const createOrUpdateQuestion = (question, id) => {
    if(id){
        const dishRef = doc(db, 'questions', id)
        return updateDoc(dishRef, {
            updated: serverTimestamp(),
            ...question})

    }
    const questionsRef = collection(db, 'questions')
    return addDoc(questionsRef, {
        created: serverTimestamp(),
        ...question
    });
};

const getQuestion = (id) => {
    const dishRef = doc(db, 'questions', id)
    return getDoc(dishRef)
}

const getQuestions = () => {
    const dishesRef = collection(db, 'questions')
    return getDocs(dishesRef)
}

const streamQuestions = (snapshot, error) => {
    const itemsColRef = collection(db, 'questions')
    const itemsQuery = query(itemsColRef, orderBy('created'))
    return onSnapshot(itemsQuery, snapshot, error);
};

const deleteQuestion = (id) => {
    const questionsRef = doc(db, 'questions', id)
    return deleteDoc(questionsRef)
}

export {
    auth,
    db,
    authenticateAnonymously,
    createOrUpdateQuestion,
    getQuestion,
    getQuestions,
    deleteQuestion,
    streamQuestions
};