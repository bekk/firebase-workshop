const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.add = functions.https.onRequest((request, response) => {
    db.collection('dishes').add().then((id: Number) => {
        console.log(id)
        response.send('Dish added');
      }, (error: String) => {
        console.error(error);
        response.send('Failed');
    });
});