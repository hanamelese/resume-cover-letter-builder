// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpVA2JfQX3sbxlNFZwKIu8ibHruN7SVjs",
  authDomain: "discover-ethiopia-aac28.firebaseapp.com",
  projectId: "discover-ethiopia-aac28",
  storageBucket: "discover-ethiopia-aac28.firebasestorage.app",
  messagingSenderId: "912529102648",
  appId: "1:912529102648:web:f4048408ec2f7c4fae53cd",
  measurementId: "G-MJ377S0BKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider=new GoogleAuthProvider()