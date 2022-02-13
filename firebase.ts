
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCN7kBk8cwRqGPif2MAfYpubAru900s-Uc",
    authDomain: "dev-challenges-oscar.firebaseapp.com",
    projectId: "dev-challenges-oscar",
    storageBucket: "dev-challenges-oscar.appspot.com",
    messagingSenderId: "902852428165",
    appId: "1:902852428165:web:519d7f43e215f4b90784ec",
    measurementId: "G-DJ16V4B4VD",
  };
  
  initializeApp(firebaseConfig);
  
export const storage = getStorage();