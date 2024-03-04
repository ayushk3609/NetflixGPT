// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS5sKBk110L_cFV0exav8eSgAwZl_7Xy0",
  authDomain: "netflixgpt-817c9.firebaseapp.com",
  projectId: "netflixgpt-817c9",
  storageBucket: "netflixgpt-817c9.appspot.com",
  messagingSenderId: "818952805850",
  appId: "1:818952805850:web:e265337e4a1426ec03b4e3",
  measurementId: "G-7G1RKQJKP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
