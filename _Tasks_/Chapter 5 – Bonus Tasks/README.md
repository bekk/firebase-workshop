# Bonus Tasks

When you have learned the basics of Firebase, there are many possible directions to explore further. Here are some examples of things you can look closer on, if you want to take your application to the next level.

🚓 Set up **Security Rules** for database access control. This is how you properly secure your Firestore database. https://firebase.google.com/docs/rules

💾 **Firebase Emulator Suite**. Set up the Emulator Suite for local development instead of using your production database. https://firebase.google.com/docs/emulator-suite

📦 Check out **Firebase Storage**. How about allowing your users to upload images with their questions? Firebase Storage is Firebase's blob storage solution, and is an easy way to allow storing files. Like images.

📚 Add categories to the questions, like Sports, Music og Politics. Allow users to create quizzes belonging to certain categories.

🔐 Add more authentication providers. Firebase, GitHub, Twitter, Microsoft.

🤫 Sign-in **anonymously**. Test the Anonymous Authentication feature of Firebase Auth. This way you can have "open data" but still some control. If an anonymous user chooses to create a proper account, you can upgrade the anonymous account, allowing the user's data from the anonymous account to be associated with the new one.

🏋️ Implement the "Create Quiz" functionality as a callable **Firebase Function**. This will require you to upgrade your Firebase project from the free plan (Spark) to pay-as-you-go (Blaze). Read more about pricing here: https://firebase.google.com/pricing. The free quotas of the Blaze plan are generous, but we encourage you to be careful and set up budget warnings.
