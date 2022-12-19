import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7VndNnM-EGdEtMxBcsqav_cSDbGlnBxg",
  authDomain: "atlasi-auth-app.firebaseapp.com",
  projectId: "atlasi-auth-app",
  storageBucket: "atlasi-auth-app.appspot.com",
  messagingSenderId: "845213239323",
  appId: "1:845213239323:web:625d4025ea5bc8e0c550be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
