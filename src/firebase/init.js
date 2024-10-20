// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcO1pYSEQjLPGImS6xvUIB6JHkd9fOB4c",
  authDomain: "week7-isaac.firebaseapp.com",
  projectId: "week7-isaac",
  storageBucket: "week7-isaac.appspot.com",
  messagingSenderId: "324582874109",
  appId: "1:324582874109:web:a2edf9cb4eb886bc48d794"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db