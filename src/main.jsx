import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJRYzJmP-NWqwj0GHS6HBNhtzVVubmF0s",
  authDomain: "cursoreact-cc7f4.firebaseapp.com",
  projectId: "cursoreact-cc7f4",
  storageBucket: "cursoreact-cc7f4.appspot.com",
  messagingSenderId: "117323985473",
  appId: "1:117323985473:web:708435b341868967804cc0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>  
  </React.StrictMode>,
)
