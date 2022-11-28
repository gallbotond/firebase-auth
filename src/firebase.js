// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUGTVQKkgZFPeE2-uQXHH7xS0ReuNB2tM",
  authDomain: "fir-auth-336c2.firebaseapp.com",
  projectId: "fir-auth-336c2",
  storageBucket: "fir-auth-336c2.appspot.com",
  messagingSenderId: "787056659347",
  appId: "1:787056659347:web:1c54a7b931a81061cbf666",
  measurementId: "G-N2JYQ5LWR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth(app);
export const collectionReference = collection(db, "sensors");

export default app;
