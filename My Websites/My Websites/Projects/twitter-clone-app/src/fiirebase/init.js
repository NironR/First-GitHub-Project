// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBKtZuTthqDdRKMwP7z2hgMmFZHilGxrA",
  authDomain: "twitter-clone-app-7e934.firebaseapp.com",
  projectId: "twitter-clone-app-7e934",
  storageBucket: "twitter-clone-app-7e934.appspot.com",
  messagingSenderId: "62268043152",
  appId: "1:62268043152:web:1d60dfe0b91a255e358d15"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db

