// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYCFoy2JQt8O7duzP5E93Nlow0rAkuUuc",
  authDomain: "charlesautos-d58ac.firebaseapp.com",
  projectId: "charlesautos-d58ac",
  storageBucket: "charlesautos-d58ac.appspot.com",
  messagingSenderId: "330409012294",
  appId: "1:330409012294:web:93d301f051c17bf68b6e47",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);