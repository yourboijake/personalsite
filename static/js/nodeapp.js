// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjicdOVmb98JpsScXyam-KfavqECbMiEg",
  authDomain: "personalsite-b7439.firebaseapp.com",
  projectId: "personalsite-b7439",
  storageBucket: "personalsite-b7439.appspot.com",
  messagingSenderId: "944475586039",
  appId: "1:944475586039:web:b8793a6f1f8a26ade282f2",
  measurementId: "G-ZNCWQGC2VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);