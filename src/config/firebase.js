import { firebase } from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXWvNpXfqN3qrYAKKDBSZIY7neDuBCvys",
  authDomain: "rising-symbol-357517.firebaseapp.com",
  projectId: "rising-symbol-357517",
  storageBucket: "rising-symbol-357517.appspot.com",
  messagingSenderId: "626295878997",
  appId: "1:626295878997:web:3f0b8ac3efe5956858ebdc",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
