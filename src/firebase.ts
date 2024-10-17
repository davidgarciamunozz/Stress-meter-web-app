// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR8wNi-tjCnsLLOv-cz9HyUdrXScQKTPE",
  authDomain: "ecocampus-f3d85.firebaseapp.com",
  projectId: "ecocampus-f3d85",
  storageBucket: "ecocampus-f3d85.appspot.com",
  messagingSenderId: "164628134022",
  appId: "1:164628134022:web:81422c9718d64c99a7f907",
  measurementId: "G-NZ395P658H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };