// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8nOplkBHVlBLmmbcEK6lEiq1ePxtpYNA",
  authDomain: "chatgpt-clone-13cf1.firebaseapp.com",
  projectId: "chatgpt-clone-13cf1",
  storageBucket: "chatgpt-clone-13cf1.appspot.com",
  messagingSenderId: "755491037523",
  appId: "1:755491037523:web:23de49fdbc2e4da460c1a6",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
