// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyCqLJnk5L-ATs1fJBon-u9cJluniESjv5o",
  authDomain: "doctor-portal-site-a4d78.firebaseapp.com",
  projectId: "doctor-portal-site-a4d78",
  storageBucket: "doctor-portal-site-a4d78.appspot.com",
  messagingSenderId: "801507178798",
  appId: "1:801507178798:web:abd8839b39a5e77e16a2bf"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;