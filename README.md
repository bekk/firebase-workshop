# Firebase Workshop 🔥

In this workshop, we are going to cover the basics of the Firebase platform. We will focus on getting to know Hosting, Firestore and Authentication. And if we have the time, we will also explore Firebase Cloud Functions and Firebase Storage.

We assume that the participants in this workshop have a basic understanding of web development in general, and modern Javascript in particular. We use React, so it is an advantage if you have some knowledge of this framework.

## Prerequisites 💾

- Node 16 or newer - https://nodejs.org/en/download/
- A Google account
- Terminal (i.e. iTerm for Mac or Terminal for Windows)
- An IDE, i.e. VS Code (https://code.visualstudio.com/)

## About the Application 🏋️

We are going to make a quiz generator application. In this app, the users should be able to add questions and anwers, see an overview of all their questions, and generate a quiz based on all the available questions in the database.

We will start with no authentication at all, but then later add it a role-based permission system. This way we will make sure that only registered users kan add questions and generate quizzes, and that only _admin_ users can see the entire collection of questions. This way people can add all sorts of questions, and we will be able to generate quizzes with a set of these questions.

# Part 1 - Hosting, Deployment and Setup 💻

The first task will be to set up a fresh Firebase project and clone this code, which will be used as a starting point. You will connect your Firebase project to your version of the quiz generator, and deploy it so it's on the Internet.

[Tasks - Part 1](/_Oppgaver_/Del%201%20-%20Hosting,%20deploy%20og%20oppsett/README.md)

# Part 2 - Firestore 📦

Firestore is the database we will use to store our data. In this task you will learn about collections, documents, snapshots, structuring your data, and more!

[Tasks – Part 2](/_Oppgaver_/Del%202%20-%20Firestore/README.md)

[Solution - Part 2](/_Løsningsforslag_/Del%202%20-%20Firestore/README.md)

# Part 3 - Authentication 😀

We will now add authentication to the mix. Firebase Authentication will be connected to the Users collection, and we will have a look at what this auth object is.

[Tasks – Part 3](/_Oppgaver_/Del%203%20-%20Autentisering/README.md)

[Solution - Part 3](/_Løsningsforslag_/Del%203%20-%20Autentisering/README.md)

# Part 4 - Authorization 🔐

Until now, we have not implemented any access control (authorization). All users can add questions and create quizzes. But now that we have _authentication_ in place, we can restrict user's privileges a bit to have more control.

[Tasks – Part 4](/_Oppgaver_/Del%204%20-%20Sy%20det%20sammen/README.md)

[Solution - Part 4](/_Løsningsforslag_/Del%204%20-%20Sy%20det%20sammen/README.md)

# Bonus Tasks 🤓

Why stop now already? We've got more tasks for you. Have a look!

[Tasks – Part 5](/_Oppgaver_/Ekstraoppgaver/README.md)
