# Solutions to the Firestore tasks

Before you can start to make calls to Firestore, you'll need to set up some firebaseConfig to your project, and then initialize the app.

1. Go to Project Settings in [Firebase Console](https://console.firebase.google.com)
2. Click "App app" under Your Apps at the bottom
3. Choose Web App
4. Give your app a name, ex. Quiz Game
5. Check the box "also setup hosting.." and choose the one you previously configured.
6. Copy `firebaseConfig` -object to your code

```js
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_PROJECT_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_PROJECT_APP_ID",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
```

## Add a document to the database

To add a document to the Firestore database, you can use `addDoc` from the firebase / firestore SDK. You choose which collection you would like to add this document to. This will then automatically generate an id for you. You can also use `setDoc` if you would like to set your own id to the document.

Question in this context is the object you would like to add to your database. It can for example be the question and the answer. And maybe also the time when the question was created?

Documentation https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document

```js
import { addDoc, collection } from "firebase/firestore";

const createQuestion = (question) => {
  const questionsRef = collection(db, "questions");
  return addDoc(questionsRef, {
    ...question,
  });
};
```

## Get a document from the database

To get a document from the database, you can call on the method `getDoc`. You specify a reference to a collection, and the id for a document you want to call getDoc with. This will return a Promise, which you can either resolve or reject.

Documentation https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document

```js
import { getDoc, doc } from "firebase/firestore";

const getQuestion = (id) => {
  const questionRef = doc(db, "questions", id);
  return getDoc(questionRef);
};
```

## Change a document in the database

To change a document you can use the method `updateDoc`

Documentation https://firebase.google.com/docs/firestore/manage-data/add-data#update-data

Note:
You can consider making it so that adding a new question and updating an existing question use the same method. For example, if the method is called without an id, you can add a new question, but if it is called with an id, you can update the existing one.

```js
import { updateDoc, doc } from "firebase/firestore";

const updateQuestion = (question, id) => {
  const questionRef = doc(db, "questions", id);
  return updateDoc(questionRef, {
    ...question,
  });
};
```

## Delete a document from the database

To delete a document you can use the method `deleteDoc`

Documentation https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents

```js
import { deleteDoc, doc } from "firebase/firestore";

const deleteQuestion = (id) => {
  const questionsRef = doc(db, "questions", id);
  return deleteDoc(questionsRef);
};
```

## Fetch documents from the database.

There are several ways to retrieve documents from Firestore. `getDocs` is the simplest variant where, similarly to retrieving a document, you retrieve many. But there is also another way, where you listen to real-time updates of documents from the database. `onSnapshot`. That method is shown further down in this file.

Documentation https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection

```js
// Firebase
import { getDocs, collection } from "firebase/firestore";

const getQuestions = () => {
  const questionsRef = collection(db, "questions");
  return getDocs(questionsRef);
};

// View
const [questions, setQuestions] = useState([]);

useEffect(() => {
  getQuestions()
    .then((questionsSnapshots) =>
      setQuestions(questionsSnapshots.docs.map((q) => q.data()))
    )
    .catch((e) => console.log(e));
}, []);
```

## Create a quiz with a selection of questions from the database

A very simple way to create a quiz based on questions from the database is to first retrieve the questions, and then pick a random selection of these questions. Perhaps you would like to send to the method how many questions you want returned?

```js
const createQuiz = async (numberOfQuestions) => {
  const questionsSnapshot = await getQuestions();

  const questions = [];
  questionsSnapshot.forEach((qSnap) => {
    questions.push({
      title: qSnap.data().title,
      answer: qSnap.data().answer,
    });
  });

  return questions
    .sort(() => Math.random() - Math.random())
    .slice(0, numberOfQuestions);
};
```

# Extra - Get documents with real-time update

```js
// Firebase
import { collection, query, onSnapshot } from "firebase/firestore";

const streamQuestions = (snapshot, error) => {
  const questionsRef = collection(db, "questions");
  let questionsQuery = query(questionsRef);

  return onSnapshot(questionsQuey, snapshot, error);
};

// View
const [questions, setQuestions] = useState([]);

useEffect(() => {
  const unsubscribe = streamQuestions(
    (querySnapshot) => {
      if (!querySnapshot) console.log("Could not find any questions");
      const questionItems = querySnapshot.docs.map((docSnapshot) => {
        return {
          id: docSnapshot.id,
          ...docSnapshot.data(),
        };
      });
      setQuestions(questionItems);
    },
    (error) => console.log(error)
  );
  return unsubscribe;
}, []);
```
