import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyHXnw4bxWi-PZFz9Wol6gUEH3Z3gdVOU",
  authDomain: "react-ecommerce-92cc2.firebaseapp.com",
  projectId: "react-ecommerce-92cc2",
  storageBucket: "react-ecommerce-92cc2.appspot.com",
  messagingSenderId: "330283674874",
  appId: "1:330283674874:web:5a73160ba56488cafb6d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

