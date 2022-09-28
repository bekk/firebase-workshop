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

## Tasks

### Chapter 1 - Hosting, Deployment and Setup 💻

Your first task will be to set up a fresh Firebase project and clone this code, which will be used as a starting point. You will connect your Firebase project to your version of the quiz generator, and deploy it so it's on the Internet.

[Tasks - Chapter 1](/_Tasks_/Chapter%201%20-%20Hosting%2C%20deployment%20and%20setup/README.md)

### Chapter 2 - Firestore 📦

Firestore is the database we will use to store our data. In this task you will learn about collections, documents, snapshots, structuring your data, and more!

[Tasks – Chapter 2](/_Tasks_/Chapter%202%20-%20Firestore/README.md)

[Solution - Chapter 2](/_Proposed%20Solutions_/Chapter%202%20-%20Firestore/README.md)

### Chapter 3 - Authentication 😀

We will now add authentication to the mix. You will learn how basic account management is done with Firebase Authentication. We'll cover email/password based authentication and login with social media providers.

[Tasks – Chapter 3](/_Tasks_/Chapter%203%20-%20Authentication/README.md)

[Solution - Chapter 3](/_Proposed%20Solutions_/Chapter%203%20-%20Authentication/README.md)

### Chapter 4 - Authorization 🔐

Until now, there is no access control (authorization) implemented. All users can add questions and create quizzes. But now that _authentication_ is in place, you can restrict users' privileges a bit to have more control.

[Tasks – Chapter 4](/_Tasks_/Chapter%204%20-Authorization/README.md)

[Solution - Chapter 4](/_Proposed%20Solutions_/Chapter%204%20-%20Authorization/README.md)

### Bonus Tasks 🤓

Why stop now already? We've got more tasks for you. Have a look!

[Tasks – Chapter 5](/_Tasks_/Chapter%205%20%E2%80%93%20Bonus%20Tasks/README.md)
