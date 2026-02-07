// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCsfn8ClMFnFBOBa2dyrPjqmpmUruwfY-o",
  authDomain: "real-estate-2a847.firebaseapp.com",
  projectId: "real-estate-2a847",
  storageBucket: "real-estate-2a847.firebasestorage.app",
  messagingSenderId: "157714600223",
  appId: "1:157714600223:web:c92409c287305ed2cfa02a",
  measurementId: "G-9KSTJ8L3L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore database
export const db = getFirestore(app);
