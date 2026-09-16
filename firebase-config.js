// 1. Go to https://console.firebase.google.com → create a free project.
// 2. In the project, click the "</>" (web) icon to register a web app.
// 3. Copy the firebaseConfig object it gives you and paste the values below.
// 4. Enable "Email/Password" sign-in: Build → Authentication → Sign-in method.
// 5. Create a Firestore database: Build → Firestore Database → Create database
//    (start in production mode, pick any region).
// 6. In Firestore → Rules, paste the rules from firestore.rules.txt and Publish.
// 7. Save this file and reload index.html.

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
