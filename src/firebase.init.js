// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc6hAyNAB4GHx3fpSLxFlod4I0waVZlDk",
  authDomain: "the-car-machine.firebaseapp.com",
  projectId: "the-car-machine",
  storageBucket: "the-car-machine.appspot.com",
  messagingSenderId: "271317659362",
  appId: "1:271317659362:web:cdb6c43a6036838c97f8bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;