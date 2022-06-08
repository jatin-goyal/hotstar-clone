// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-GzHM_uK1bHV1096SNXSk85BwsOQPjFY",
  authDomain: "disneyplus-clone-74185.firebaseapp.com",
  projectId: "disneyplus-clone-74185",
  storageBucket: "disneyplus-clone-74185.appspot.com",
  messagingSenderId: "611843921428",
  appId: "1:611843921428:web:363476ef2d3a8ad2727901",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
