// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJRYzJmP-NWqwj0GHS6HBNhtzVVubmF0s",
  authDomain: "cursoreact-cc7f4.firebaseapp.com",
  projectId: "cursoreact-cc7f4",
  storageBucket: "cursoreact-cc7f4.appspot.com",
  messagingSenderId: "117323985473",
  appId: "1:117323985473:web:708435b341868967804cc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db=getFirestore(app);

export { auth };
