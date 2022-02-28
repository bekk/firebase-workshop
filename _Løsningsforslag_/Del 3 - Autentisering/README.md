# Løsningsforslag for Del 3 Autentisering

## Registrering av bruker med e-post

Dette kan gjøres manuelt via Firebase-grensesnittet eller med kode.

For å registrere en bruker kan vi bruke funksjonen `createUserWithEmailAndPassword` fra `firebase/auth`. Funksjonen tar i mot tre argumenter: et `auth`-objekt, `email` og `password`.

Det første vi gjør er å få tak på `auth`-objektet. Denne kan legges rett under `initializeApp(firebaseConfig)` i `firebase.js`.

```javascript
import { getAuth } from "firebase/auth";

let auth = getAuth();

// Se til at authDomain også er satt i firebaseConfig. Denne verdien kan finnes via Project Settings i Firebase consolen og under "Your Apps".
const firebaseConfig = {
    ....
    authDomain: '...',
    ...
};

```

Sånn da har vi det på plass. Dette objektet inneholder den nåværende autentiseringsstatusen til applikasjonen og er viktig for å få autentisering til å virke. `getAuth` er inngangsporten til Firebase sitt autentiserings API og du trenger den for å administrere brukerkontoer.

Videre kan vi lage en egen funksjon for å registrere brukere. Den kan se omtrent slik ut:

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

Deretter kobler du knappen i registreringsskjemaet til funksjonen vi har laget.

```javascript
import { registerWithEmailAndPassword } from "../firebase";

<Button onClick={() => registerWithEmailAndPassword(name, email, password)}>
  Registrer
</Button>;
```

Dokumentasjon: https://firebase.google.com/docs/auth/web/password-auth

## Registrere en bruker med Google Provider

Før vi kan bruke Google som autentiseringstjeneste må vi legge dette til som en ny Authenication Provider i Firebase-consolen. Velg "Sign-in method" -> "Add new Provider" og velg Google. Fyll ut skjemaet.

For å så bruke Google som innlogging kan du gjøre følgende.

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

Fra view-komponenten kan du nå bare kalle på `signInWithGoogle`-metoden for å logge inn med Google.

## Logg ut-funksjonalitet

For å logge ut trenger du bare å kalle på en funksjon

```javascript
import { signOut } from "firebase/auth";

export const logOut = () => {
  signOut(auth);
};
```

## Reset passord-funksjonalitet

For å trigge utsendelse av reset passord mail trenger du også bare å kalle på en funksjon med ønsket epost-adresse.

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

## Behold info om bruker ved registrering

Av og til ønsker man kanskje å ta vare på noe mer informasjon om bruker-objektet enn bare brukernavn og den registrerte id'en. Da kan en egen Firestore-collection `Users` være nyttig å bruke. I en slik collection kan man for eksempel holde på navnet til personen, en link til et profilbilde og hva slags rolle brukeren skal ha - `user` / `admin` eller lignende.

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
