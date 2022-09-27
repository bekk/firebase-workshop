# Part 1 - Hosting, Deployment and Setup

In this chapter we will create a project and deploy our website to the Internet. Don't worry – we will only be using the Free tier of Firebase.

## Step 1: Create a Firebase project

1. Go to the [Firebase Console](https://console.firebase.google.com)
2. Log in or create an account
3. Create a new project
4. Give your project a name, for instance "bekk-workshop-quiz" (when asked, don't enable Analytics for the project 😏)
5. Congrats! Your Firebase project is created! 🎉

## Step 2: Install Firebase Tools

1. Open your terminal and install the Firebase Tools CLI globally by running `npm install -g firebase-tools`. (https://github.com/firebase/firebase-tools)
2. Enter `firebase login` og follow the instructions to log in with the account used in Step 1.
3. Give yourself a well-deserved high-five. 🙌

## Step 3: Clone the Project to Your Machine

1. Use git til å clone the project (`git clone git@github.com:bekk/firebase-workshop.git`)
2. Open the project in your favorite editor or IDE. For instance [Visual Studio Code](https://code.visualstudio.com/)
3. Write `npm install` followed by `npm start`
4. Your browser should automatically open and "Quiz Generator" should run on [localhost:3000](http://localhost:3000/).

## Step 4: Connect the Project to Firebase

1. In order to connect your local project to Firebase, we need to make a quick configuration. Start by entering `firebase init`.
2. Follow the instructions (see the image below). On the first step, select:

```
Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
```

3. Select the account that you used to register your project.
4. As your public directory, enter `build`. This is where our built code will be located.
5. Answer yes (`y`) to it being a Single Page Application.
6. Answer no (`N`) to setting up GitHub Actions.
7. If you get the message "File build/index.html already exists", answer `N` to _not_ overwrite the file.

![Something like this](/resources/firebaseSetupHosting.png)

## Step 5: Ship it to the Internet

1. Open a new terminal and write `firebase projects:list`
2. Open the file `.firebaserc` and make sure that the Project ID matches your newly created project.
3. Write `npm run build` followed by `firebase deploy --only hosting`
4. Your app is live! 🎉 Compliment yourself on a job well done.
