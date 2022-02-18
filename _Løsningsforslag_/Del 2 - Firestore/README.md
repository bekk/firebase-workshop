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

For å legge til et dokument i Firestore databasen kan du benytte `addDoc` fra firebase/firestore SDK. Du velger hvilken collection du ønsker å legge dette dokumentet til. Denne vil så auto-generere en id for deg. Du kan også bruke `setDoc` dersom du ønsker å spesifisere en egen id til dokumentet.

Question er i denne konteksten objektet du ønsker å legge til i databasen. Dette kan f.eks være spørsmålet og svaret. Og kanskje også når spørsmålet ble laget?

Dokumentasjon https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document

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

For å hente et dokument fra databasen så kan du kalle på metoden `getDoc`. Du spesifiserer altså en referanse til en collection og id til et dokument som du kaller getDoc med. Denne returnerer så en Promise som du så kan resolve eller rejecte.

Dokumentasjon https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document

```js
import { getDoc, doc } from "firebase/firestore";

const getQuestion = (id) => {
  const questionRef = doc(db, "questions", id);
  return getDoc(questionRef);
};
```

## Endre et dokument fra databasen

For å endre på et dokument så kan du bruke metoden `updateDoc`.

Dokumentasjon https://firebase.google.com/docs/firestore/manage-data/add-data#update-data

P.S Du kan jo vurdere å gjøre slik at det å legge til nytt spørsmål og oppdatere et eksisterende spørsmål bruker samme metode. F.eks ved at dersom metoden kalles uten id, så kan du legge til et nytt spørsmål, men dersom den kalles med en id, så kan du oppdatere det eksiterende.

```js
import { updateDoc, doc } from "firebase/firestore";

const updateQuestion = (question, id) => {
  const questionRef = doc(db, "questions", id);
  return updateDoc(questionRef, {
    ...question,
  });
};
```

## Slett et dokument fra databasen

For å slette et dokument så kan du bruke metoden `deleteDoc`.

Dokumentasjon https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents

```js
import { deleteDoc, doc } from "firebase/firestore";

const deleteQuestion = (id) => {
  const questionsRef = doc(db, "questions", id);
  return deleteDoc(questionsRef);
};
```

## Hent dokumenter fra databasen.

Det finnes flere måter å hente ut dokumenter fra Firestore på. `getDocs` er den enkleste varianten der du, tilsvarende som med henting av et dokument, henter mange. Men det finnes også en annen måte, der du lytter til realtime oppdateringer av dokumenter fra databasen. `onSnapshot`. Den metoden er vist lenger ned i denne filen.

Dokumentasjon https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection

```js
// Firebase
import { getDocs, collection } from "firebase/firestore";

const getQuestions = () => {
  const questionsRef = collection(db, "questions");
  return getDocs(questionsRef);
};

// View
const [questions, setQuestions] = useState([]);

useEffect(() => {
  getQuestions()
    .then((questionsSnapshots) =>
      setQuestions(questionsSnapshots.docs.map((q) => q.data()))
    )
    .catch((e) => console.log(e));
}, []);
```

## Lage en Quiz med et utvalg av spørsmålen fra databasen

En veldig enkel måte å lage en quiz basert på spørsmål fra databasen er å først hente ut spørsmålene, og så plukke ut et tilfeldig utvalg av disse spørsmålene. Kanskje vil du sende med til metoden hvor mange spørsmål du vil ha returnert?

```js
const createQuiz = async (numberOfQuestions) => {
  const questionsSnapshot = await getQuestions();

  const questions = [];
  questionsSnapshot.forEach((qSnap) => {
    questions.push({
      title: qSnap.data().title,
      answer: qSnap.data().answer,
    });
  });

  // Hent et gitt antall tilfeldige elementer fra en liste
  return questions
    .sort(() => Math.random() - Math.random())
    .slice(0, numberOfQuestions);
};
```

# Ekstra - Hent dokumenter med real-time update

```js
// Firebase
import { collection, query, onSnapshot } from "firebase/firestore";

const streamQuestions = async (snapshot, error) => {
  const questionsRef = collection(db, "questions");
  let questionsQuery = query(questionsRef);

  return onSnapshot(questionsQuey, snapshot, error);
};

// View
const [questions, setQuestions] = useState([]);

useEffect(() => {
  const unsubscribe = streamQuestions(
    (querySnapshot) => {
      if (!querySnapshot) console.log("Fant ingen spørsmål");
      const questionItems = querySnapshot.docs.map((docSnapshot) => {
        return {
          id: docSnapshot.id,
          ...docSnapshot.data(),
        };
      });
      setQuestions(questionItems);
    },
    (error) => console.log(error)
  );
  return unsubscribe;
}, []);
```
