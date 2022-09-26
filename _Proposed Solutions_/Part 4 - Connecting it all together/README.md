# Proposed solution for connecting it all together

## A logged-in user should only see his questions

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

## An admin user must be able to see all questions that have been entered

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

## Only logged in users should be able to create a quiz

```javascript

const createQuiz = async () => {
    const auth = getAuth();

    if(!auth || !auth.currentUser) {
        return Promise.reject('You must be logged in to create a quiz')
    }

    ....

    return questions
}

```

## Extra - Security Rules

Security rules are used to ensure who gets access to the documents in the Firestore database.

Security Rules cannot be used as a filter in the query. The rules give the query either data or no data.

Read more here if you want to use `security.rules`
https://firebase.google.com/docs/firestore/security/rules-query

Example of how a security rule might look for read and write access to Firestore documents

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

At https://console.firebase.google.com/project/{DITT_PROJECT_ID}/firestore/rules you can experiment with Security Rules for your Firestore database

![Security Rules](/resources/SecRules.png)
