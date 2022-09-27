# Tasks Part 3 - Authentication

Now it's time to set up authentication with Firebase Authentication, so we can add new users, log in and out and store some basic user info.

The Firebase Authentication documentation can be found [here](https://firebase.google.com/docs/auth).

## Register your first user manually

<img alt="Register with Firebase" src="/resources/registerWithFirebase.png" width="500"/>

Create a new user via the GUI. Go to the Firebase Console and register a user with email and password. Remember the password! You will be logging in with these credentials in your app shortly.

> 💡 You need to add your app to Firestore to make Firestore Authentication work. Do this by following the instructions at "Project Settings" in the [Firebase Console](https://console.firebase.google.com).

## Logging in with email and password

<img alt="Log in with email" src="/resources/loginWithEmail.png" width="500"/>

Cool! You now have a registered user account in Firebase. Implement the functionality needed to log in with email and password in your app.
There is some code in `Login.js` that you can use as a starting point.

## Register users with email and password in your app

<img alt="Register user with email" src="/resources/registerWithEmail.png" width="500"/>

Manually registering all users doesn't scale well! 🥵 Let's do something about that!

Write the code needed to register a user with email and password in Firebase. That should do the trick. Use the registration form in `Register.js`.

## Register a user with the Google Provider

Instead of having to create a new _password_ in order to use the quiz app, let's make it possible to register an account using one's Google account. One less password to remember!

Expand the functionality of `Register.js` to support registering with Google.

## Log in with the Google Provider

Nice! Good work! Now it's time to _log in_ with a Google account. Implement login with Google when the "Log in with Google" button is pressed in `Login.js`.

## Logging out

When it's possible to log in, one should be able to log out as well. Don't you agree? 😏 Implement this now, please.

## Reset Password

It is common to forget one's password. Add code to let users reset their password.

## Store some info about the user

Now it's getting exciting. Create a new Firestore collection for user information. When a user is registered, also create a document representing the user in this new collection.

### Bonus Tasks 💅

- See if you can customize the content of the email sent by Firebase when a user is registered, password reset, etc.
- Add support for more social login providers. GitHub, Twitter, or others.
- Replace the authentication components with [Firebase UI](https://github.com/firebase/firebaseui-web)
