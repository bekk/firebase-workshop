# Løsningsforslag for Del 3 Autentisering

## Steg 1 - Registrere en bruker med e-post

Dette kan gjøres manuelt via Firebase-grensesnittet og med kode. 

### Oppgave 1: Registrere bruker med e-post via Firebase-grensesnitt
1. Klikk Authentication
2. Add user 
3. Fyll ut e-post og passord du vil bruke

### Oppgave 2: Registrere bruker med e-post med kode
For å registrere en bruker kan vi bruke funksjonen ``createUserWithEmailAndPassword`` fra ``firebase/auth``. Funksjonen tar i mot tre argumenter: et `auth`-objekt, `email` og `password`. 

Det første vi gjør er å få tak på ``auth``-objektet. Denne kan legges rett under `initializeApp(firebaseConfig)` i `firebase.js`. 

```javascript
import { getAuth } from "firebase/auth";

let auth = getAuth();
```

Sånn da har vi det på plass. Dette objektet inneholder den nåværende autentiseringsstatusen til applikasjonen og er viktig for å få autentisering til å virke. ``getAuth`` er inngangsporten til Firebase sitt autentiserings API og du trenger den for å administrere brukerkontoer.

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
import { registerWithEmailAndPassword } from '../firebase';

<Button onClick={ () => registerWithEmailAndPassword(name, email, password) }>
  Registrer
</Button>
```

Dokumentasjon: https://firebase.google.com/docs/auth/web/password-auth 

## Steg 2 Registrere en bruker med Google Provider

### Oppgave 1: Registrere en bruker med Google Provider via Firebase-grensesnitt

1. I Firebase Console, klikk Authentication og legg til en ny Sign-in provider.
2. Klikk på Google og slå på denne
    1. Gi prosjektet et brukervennlig navn, for eksempel project-798579318718
    2. Velg din egen epost som support-mail
    3. Klikk lagre

### Oppgave 2: Registrere en bruker med Google Provider