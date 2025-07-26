// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhoOZNQoDrNSf9yXd0Aa6oofBE6hmKdjc",
    authDomain: "acementor-a5b30.firebaseapp.com",
    projectId: "acementor-a5b30",
    storageBucket: "acementor-a5b30.firebasestorage.app",
    messagingSenderId: "739822873099",
    appId: "1:739822873099:web:58a4bead28d7508743f50e",
    measurementId: "G-ZMC26HSZT5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);