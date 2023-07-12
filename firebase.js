// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBlfdGOdyCXxet3Xl_hkN-_YEAIbCZC6Qw",
  authDomain: "uber-next-clone-7b492.firebaseapp.com",
  projectId: "uber-next-clone-7b492",
  storageBucket: "uber-next-clone-7b492.appspot.com",
  messagingSenderId: "288979600301",
  appId: "1:288979600301:web:e6e76f55ca555ec92bd724",
  measurementId: "G-DKB8B87MP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app ,provider ,auth}