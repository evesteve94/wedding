import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMc0w27oo4LlSE8a7DnUG8HPm4e6lT_pM",
  authDomain: "movie-db-firebase.firebaseapp.com",
  projectId: "movie-db-firebase",
  storageBucket: "movie-db-firebase.appspot.com",
  messagingSenderId: "592759240602",
  appId: "1:592759240602:web:adb29a02002c323fc2ac23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);