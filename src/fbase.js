// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmxx5pmUY2aRCkQhXkr5jevcirsd7zEME",
  authDomain: "findmissingpeopleservice.firebaseapp.com",
  projectId: "findmissingpeopleservice",
  storageBucket: "findmissingpeopleservice.appspot.com",
  messagingSenderId: "1051876922715",
  appId: "1:1051876922715:web:e283e3868ca118ee07f67e",
  measurementId: "G-GJBRRC0LL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };