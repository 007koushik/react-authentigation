
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4uSyCgFufxysJ2YIvjSi-5LaI3mLBj8k",
  authDomain: "fir-auth-4fceb.firebaseapp.com",
  projectId: "fir-auth-4fceb",
  storageBucket: "fir-auth-4fceb.appspot.com",
  messagingSenderId: "381882371323",
  appId: "1:381882371323:web:62ef99bb310dc6054ff45e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);