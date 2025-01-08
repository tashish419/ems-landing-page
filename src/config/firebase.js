// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2bOU0-VtDKfsNbFA-shhz0NKVxNaL76g",
  authDomain: "finwell-2088f.firebaseapp.com",
  projectId: "finwell-2088f",
  storageBucket: "finwell-2088f.firebasestorage.app",
  messagingSenderId: "239315049308",
  appId: "1:239315049308:web:fc6592cd66ad963d967f99",
  measurementId: "G-5X6H09V05G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const analytics = getAnalytics(app);