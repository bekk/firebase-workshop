# Proposed solutions for Chapter 3: Authentication

## Register a user with email

This can be done manually via the Firebase interface or with code.

To register a user we can use the function `createUserWithEmailAndPassword` from `firebase/auth`. The function accepts three arguments: an `auth` object, `email` and `password`.

The first thing we do is get hold of the `auth` object. This can be placed directly under `initializeApp(firebaseConfig)` in `firebase.js`.

```javascript
import { getAuth } from "firebase/auth";

let auth = getAuth();

// Ensure that authDomain also is set in firebaseConfig. This value can be found in Project Settings in Firebase console under "Your Apps".
const firebaseConfig = {
    ....
    authDomain: '...',
    ...
};

```

Tada! Now we have that one set up. This object contains the current authentication state of the application and is important for authentication to work. `getAuth` is the gateway to Firebase's authentication API and you need it to manage user accounts.

Furthermore, we can create a separate function to register users. It may look something like this:

```javascript
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("Registration was success! Welcome to the party", user);
  } catch (err) {
    console.error(err);
  }
};
```

Then connect the button in the registration form to the function we have created.

```javascript
import { registerWithEmailAndPassword } from "../firebase";

<Button onClick={() => registerWithEmailAndPassword(name, email, password)}>
  Register
</Button>;
```

Dokumentation: https://firebase.google.com/docs/auth/web/password-auth

## Register a user with Google Provider

Before we can use Google as an authentication service, we need to add this as a new Authenication Provider in the Firebase console. Select "Sign-in method" -> "Add new Provider" and select Google. Fill out the form.

To then use Google as a login, you can do the following.

```javascript
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
  } catch (err) {
    console.error(err);
  }
};
```

From the view component, you can now just call the `signInWithGoogle` method to log in with Google.

## Log in with email

Submit email and password from the view component to the following method to login with username and password

```javascript
import { signInWithEmailAndPassword } from "firebase/auth";

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};
```

## Log in with Google

To log in with Google, call the function `signInWithPopup` and send with `auth` and `googleProvider`.

```javascript
import { signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};
```

## Log out functionality

To log out, you only need to call a function

```javascript
import { signOut } from "firebase/auth";

export const logOut = () => {
  signOut(auth);
};
```

## Reset password

To trigger the sending of a reset password email, you also only need to call a function with the desired email address.

```javascript
import { sendPasswordResetEmail } from "firebase/auth";

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error(err);
  }
};
```

## Store info about the user when register

Sometimes you might want to take care of some more information about the user object than just the username and the registered ID. Then a separate Firestore collection `Users` can be useful to use. In such a collection, for example, you can keep the name of the person, a link to a profile picture and what kind of role the user should have - `user' / `admin' or similar.

```javascript
export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      role: "user",
      authProvider: "email",
      email,
    });
  } catch (err) {
    console.error(err);
  }
};
```

It can also be practical to extend the login with Google functionality to also add a document to the `Users` collection if this is not included, and if it is not added during registration.

```javascript
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        role: "user",
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
```
