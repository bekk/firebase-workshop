/*
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.generateQuiz = functions.https.onRequest((request, response) => {
  db.collection("questions").get()
      .then((q) => {
        const questions = q.docs.map((d) => d.data());

        return response.send(questions);
      })
      .catch((e) => {
        response.send(e);
      });
});
*/
