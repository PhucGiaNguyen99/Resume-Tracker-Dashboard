import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDM2fjl_wcqEkqyOOQmliI9e2RlOsLkpXA",
    authDomain: "resume-tracker-dashboard.firebaseapp.com",
    projectId: "resume-tracker-dashboard",
    storageBucket: "resume-tracker-dashboard.firebasestorage.app",
    messagingSenderId: "1057248085832",
    appId: "1:1057248085832:web:7bd89d8e2eee9c0178957d"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
