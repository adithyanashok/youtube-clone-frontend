// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAQESGY76C0ntSWf03vsoJO3aTNeyASvqQ",
  authDomain: "video-app-8827a.firebaseapp.com",
  projectId: "video-app-8827a",
  storageBucket: "video-app-8827a.appspot.com",
  messagingSenderId: "1017621707995",
  appId: "1:1017621707995:web:9db139e8a4aa454542e0fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export default app;
export const provider = new GoogleAuthProvider()