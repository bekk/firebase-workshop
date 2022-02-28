# Løsningsforslag Del 4 - Sy det sammen

## En innlogget bruker skal kun se sine spørsmål

```javascript
const getQuestions = async (createdBy) => {
  const questionsRef = collection(db, "questions");
  const questionsQuery = query(
    questionsRef,
    where("createdBy", "==", createdBy)
  );

  return getDocs(questionsQuery);
};
```

## En admin-bruker skal kunne se alle spørsmål som er lagt inn

```javascript
const getQuestions = async (createdBy) => {
  const questionsRef = collection(db, "questions");
  const user = await getUser(createdBy);

  let questionsQuery = query(questionsRef, where("createdBy", "==", createdBy));

  if (user && user.role == "admin") {
    questionsQuery = query(questionsRef);
  }

  return getDocs(questionsQuery);
};
```

## Kun innloggede brukere skal kunne lage en quiz

```javascript

const createQuiz = async () => {
    const auth = getAuth();

    if(!auth || !auth.currentUser) {
        return Promise.reject('Du må være logget inn for å lage en quiz')
    }

    ....

    return questions
}

```

## Ekstraoppgave - Security Rules

Security rules brukes for å sikre hvem som får tilgang til dokumentene i Firestore databasen.

Security Rules kan ikke brukes som filter i spørringen. Reglene gir spørringen enten data eller ikke noe data.

Les mer her om du ønsker å bruke `security.rules`
https://firebase.google.com/docs/firestore/security/rules-query

Eksempel på hvordan en security rule kan se ut for lese- og skrivetilgang til Firestore dokumenter

```code
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Via https://console.firebase.google.com/project/{DITT_PROJECT_ID}/firestore/rules kan du eksperimentere med Security Rules for din Firestore database

![Security Rules](/resources/SecRules.png)
