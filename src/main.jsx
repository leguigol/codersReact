import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './app.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>  
  </React.StrictMode>,
)
