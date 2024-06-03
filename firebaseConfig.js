// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW4qUlNxhdJqVpeqhHtSPTROy87JGf8dw",
  authDomain: "file-sharing-33a3a.firebaseapp.com",
  projectId: "file-sharing-33a3a",
  storageBucket: "file-sharing-33a3a.appspot.com",
  messagingSenderId: "711931581505",
  appId: "1:711931581505:web:c59b7a59697463f30b22c0",
  measurementId: "G-X520SHBJ14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);