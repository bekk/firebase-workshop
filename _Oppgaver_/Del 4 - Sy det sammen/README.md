# Tasks Part 4 - Authorization

Now for the last part of the workshop! We now have functionality for adding, editing and deleting questions, as well as seeing an overview of all available questions. In addition to this, we have authentication in place. Now it's a good time to combine this to provide some security in the shape of authorization (access control).

Securing your Firestore database is done using what's called "Security Rules". You can put these rules in your `rules.json` (https://firebase.google.com/docs/firestore/security/get-started#writing_rules) file. We don't have time in this workshop to cover too much of Security Rules, so we will keep it simple. But we strongly encourage you to take a closer look at Security Rules and securing your database properly, if you're going for production.

## See one's own questions

Logged-in users should be able to see all the questions they have created themselves. And users should NOT be able to see other users' questions.

## Administrators should be able to see all questions

Users that have the role of "admin" should be able to see, edit and delete all questions that have been created, by any user.

## Only logged-in users are quiz makers

We don't want anyone to be able to create a quiz. Only authenticated users should be able to do this.

## Bonus Tasks

- Set up **Security Rules** for securing database access. It's with Security Rules one does this the right way. https://firebase.google.com/docs/rules
