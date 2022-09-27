import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

/*
// Import the methods you need from Firebase

import { addDoc, collection, getDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
*/

// Fill in the config values of your Firebase project below
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    appId: ''
};

/* Uncomment the lines below when your Firebase config is good. */
//const app = initializeApp(firebaseConfig)
//const db = getFirestore(app)
//const auth = getAuth(app)

const createQuestion = (question) => {
    // Add questions to Firestore. This method is called from the component src/Containers/Question.js

    /*
        Either follow the documentation here: https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
        or see the propoesd solution: https://github.com/bekk/firebase-workshop/blob/main/_L%C3%B8sningsforslag_/Del%202%20-%20Firestore/README.md#legge-til-et-dokument-i-databasen

        After you have written your code for adding a question to Firestore,
        check if you can see it appear in the Firestore Console.
    */
};

// Fetch a question document from Firestore here
const getQuestion = (id) => {
    // https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
}

// Update a question in Firestore
const updateQuestion = (question, id) => {
    // https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
}

// Delete a question by ID
const deleteQuestion = (id) => {
    // https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents
}

// Fetch all questions
const getQuestions = () => {
    // https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection
}

const createQuiz = () => {
    // Create a quiz with questions from Firestore.
}

const registerWithEmailAndPassword = async (name, email, password) => {
    // Register a user with email and password
    // https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
    try {
        console.log("Registration was a success!");
    }
    catch (err) {
        console.error(err);
    }
};

const signInWithGoogle = async () => {
    // https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
    try {
        console.log("Logged in with Google")
    }
    catch (err) {
        console.error(err);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
    try {
        console.log("Logged in using email and password")
    }
    catch (err) {
        console.error(err);
    }
};

const logOut = async () => {
    // https://firebase.google.com/docs/auth/web/password-auth#next_steps
}


const sendPasswordReset = async (email) => {
    // https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
    try {
        console.log("Password reset email sent!")
    }
    catch (err) {
        console.error(err);
    }
};

export {
    createQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestions,
    createQuiz,
    registerWithEmailAndPassword,
    signInWithGoogle,
    logInWithEmailAndPassword,
    logOut,
    sendPasswordReset
};
