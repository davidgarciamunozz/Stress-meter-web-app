// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0OE2kSgSpxQz89f4KAP94Th_ilyAz5aY",
  authDomain: "pi-stress-app.firebaseapp.com",
  projectId: "pi-stress-app",
  storageBucket: "pi-stress-app.firebasestorage.app",
  messagingSenderId: "205063578492",
  appId: "1:205063578492:web:effb68f2ddefde03203af9",
  measurementId: "G-QD8TY6E9MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };