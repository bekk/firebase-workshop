# Chapter 2 - Firestore

We are now going to get the application to talk to its own Firestore database.

## Configure Firebase

### Create the Database

Before you can connect to Firestore and add documents, we need to enable Firestore in the Firebase Console. Go to the console, select Firestore Database in the side menu, and initialize a database. Choose "Test mode" and your preferred region.

### Configure Security Rules and Indexes

Run `firebase init` again and select:

```
Firestore: Configure security rules and indexes files for Firestore
```

Select the defaults by pressing <kbd>Enter</kbd> until you see:

```
 ✔ Firebase initialization complete!
```

### Add firebaseConfig to firebase.js

The last thing you need to do is to fill out `firebaseConfig` in the file `firebase.js`. This is necessary for the app to communicate with Firestore.

1. Go to Project Settings in the [Firebase Console](https://console.firebase.google.com).
2. Click "Add Web App" under "Your Apps".
3. Give your app a cool name, like "Quiz Game 2000 🧠". 🆒
4. Check the "also setup hosting.." option and select the app you just created.
5. Click "Register app".
6. Copy the `firebaseConfig` JSON-object to your clipboard and paste it into `src/firebase.js`.
7. Your app is now ready to connect to Firestore! 🎉

<details><summary>💡 Tips </summary>

</br>

> Check out the official documentation on Firestore: https://firebase.google.com/docs/firestore.

</details>

## Add a Document

Right now, the user can add a question and an answer, and click "Save". But nothing useful really happens. Let's fix that!

Your task is to make the "Save" function actually save the question to the Firestore database.

When you see that the question is appearing in the Firestore collection in the Firebase Console, then you are ready for the next task. 🥇

![Add question](/resources/createQuestion.png)

## Fetch a Document from the Database

When you go to the URL (`http://localhost:3000/question/{id}`) with `{id}` matching the question you just added to the Firestore collection, then this question's properties should be displayed in the input fields.

![Edit question](/resources/editQuestion.png)

## Edit a Document

Add a possibility for the user to edit an existing question. If you are on a question's page (`http://localhost:3000/question/{id}`), edits it and saves it, then this should be persisted to the database as well.

## Delete a Document

Add the functionality necessary to let a user delete a question from the database.

## Fetch Multiple Documents

Until now, we have only looked at one question at a time. Let's make it possible to view all the available question/answer pairs on the "My questions" page (`http://localhost:3000/questions`).

![List questions](/resources/getQuestions.png)

## Create a Quiz

Create a quiz with a selection of questions from the database. Currently the quiz will only consist of your own questions, but in the next part of the workshop, we will add authentication and let you generate quizzes with questions from other users as well.

You can for instance implement a feature that lets the user that is generating a quiz select how many questions to use?

## Bonus Tasks

Here are some extra stuff you could do to improve the quiz generator app. Or work on your own ideas!

- Use Firestore's streaming functionality to get realtime updates.
- Add timestamps for when a document is created and/or updated.
- Add more fields to your question documents. For instance a `category` field.
- Only fetch questions created of a certain age.
