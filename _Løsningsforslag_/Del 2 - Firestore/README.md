# Løsningsforslag for Firestore oppgavene

Før man kan begynne å kalle på Firestore må først sette opp firebaseConfig til sitt prosjekt og så initalisere appen.

```js
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "DITT_PROSJEKT_API_KEY",
  projectId: "DITT_PROSJEKT_PROJECT_ID",
  appId: "DITT_PROSJEKT_APP_ID",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
```

## Legge til et dokument i databasen

For å legge til et dokument i Firestore databasen kan du benytte addDoc-pakken fra firebase/firestore SDK. Du velger hvilken collection du ønsker å legge dette dokumentet til. Denne vil så auto-generere en id for deg. Du kan også bruke setDoc dersom du ønsker å spesifisere en egen id til dokumentet.

Question er i denne konteksten objektet det du ønsker å legge til i databasen. Dette kan f.eks være spørsmålet og svaret. Og kanskje også når spørsmålet ble laget?

Mer add document her https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document

```js
import { addDoc, collection } from "firebase/firestore";

const createQuestion = (question) => {
  const questionsRef = collection(db, "questions");
  return addDoc(questionsRef, {
    ...question,
  });
};
```

## Hente et dokument fra databasen

## Endre et dokument fra databasen

## Slett et dokument fra databasen

## Hent alle dokumenter fra databasen. Forsøk å hent dokumentene både som vanlig get og stream.

## Lage en Quiz med et utvalg av spørsmålen fra databasen
