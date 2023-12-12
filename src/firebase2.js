import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJRYzJmP-NWqwj0GHS6HBNhtzVVubmF0s",
    authDomain: "cursoreact-cc7f4.firebaseapp.com",
    projectId: "cursoreact-cc7f4",
    storageBucket: "cursoreact-cc7f4.appspot.com",
    messagingSenderId: "117323985473",
    appId: "1:117323985473:web:708435b341868967804cc0"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
