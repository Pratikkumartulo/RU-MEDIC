// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa-h66XXmAzQTcWH24cAJyJvXUkZuSwGo",
  authDomain: "ru-medytwopo.firebaseapp.com",
  projectId: "ru-medytwopo",
  storageBucket: "ru-medytwopo.appspot.com",
  messagingSenderId: "235442573344",
  appId: "1:235442573344:web:08351b6adf91b3d0df6c45",
  measurementId: "G-EE0J50S7X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);