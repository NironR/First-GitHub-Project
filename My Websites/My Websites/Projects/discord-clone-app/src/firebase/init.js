// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd3WmsGc7-bt8tIXQxAi01g8kKzClnxj0",
  authDomain: "discord-clone-app-85091.firebaseapp.com",
  projectId: "discord-clone-app-85091",
  storageBucket: "discord-clone-app-85091.appspot.com",
  messagingSenderId: "389476682230",
  appId: "1:389476682230:web:07d7a1dc9c0f8da5435fd7",
  measurementId: "G-1L8P3T989S"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

