# Del 3 - Autentisering

[Docs](https://firebase.google.com/docs/auth)

[Firebase UI](https://github.com/firebase/firebaseui-web)

1. Gå til Project Settings i [Firebase Console](https://console.firebase.google.com)
2. Klikk "Add app" under Your Apps nederst
   1. Velg Web App
   2. Gi appen et kult navn, for eksempel Quiz Game
   3. Huk av på "also setup hosting.." og velg den du satte opp tidligere
3. Kopier `firebaseConfig` objektet i kodevinduet

Den ser omtrent slik ut:

```javascript
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxmBgfdshYUqFFSbOX1y9exgu2cc",
  authDomain: "bekk-workshop-quiz.firebaseapp.com",
  projectId: "bekk-workshop-quiz",
  storageBucket: "bekk-workshop-quiz.appspot.com",
  messagingSenderId: "79857466632718",
  appId: "1:885732318718:web:4eea5f0d7758466f5d63ef",
};
```

I dette eksempelet trenger du kun `apiKey, authDomain, projectId, appId`

4. Åpne filen `firebase.js` (under `src/utils`), finn `firebaseConfig` og legg til din egen konfigurasjon
5. Bygg og deploy tjenesten din på nytt (`npm run build && firebase deploy --only hosting`)

## Steg 1 Registrere en bruker med e-post

1. I Firebase Console, klikk Authentication og finn Sign-in method / Sign-in providers
2. Klikk på Email & Password og aktiver denne.
3. Gå til Users og legg til deg selv
4. Test at du får logget inn med epost og passord i applikasjonen din

## Steg 2 Registrere en bruker med Google Provider

1. I Firebase Console, klikk Authentication og legg til en ny Sign-in provider.
2. Klikk på Google og slå på denne
   1. Gi prosjektet et brukervennlig navn, for eksempel project-798579318718
   2. Velg din egen epost som support-mail
   3. Klikk lagre
3. Test at du får logget inn med google i applikasjonen din (husk å ta en refresh med ctrl + r / cmd + r)

## Steg 3 Logge inn med e-post

## Steg 4 Logge inn med Google

## Steg 5 Logg ut funksjonalitet

## Steg 6 Nullstill passord

## Steg 7 Beholde info om bruker

-
- Registrere en bruker med epost
- Registrere en bruker med Google Provider
- Legg inn funksjonalitet for å logge inn med epost
- Legg inn funksjonalitet for å logge inn med Google
- Legge inn Logg ut funksjonalitet
- Legge inn Passord reset funksjonalitet. Finner du også ut hvordan du kan pynte på mailen som sendes ut fra Firebase?
- Legge til en bruker i en Users-collection ved registrering for å holde på informasjon om brukeren.
- Legg til flere autentiseringsproviders. Github, Twitter, osv.
- Se om du kan oppdatere mailen som sendes ut fra Firebase ved opprettelse av bruker, glemt passord og slikt.

### Ekstraoppgaver

- Bytt ut den hjemmesnekra log in med [Firebase UI](https://github.com/firebase/firebaseui-web)
