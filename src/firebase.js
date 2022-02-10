// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import "firebase/database"
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC3HmY6VGrp-CJK6BAFGJT-LYm84_lhtQ",
    authDomain: "slack-f36a3.firebaseapp.com",
    projectId: "slack-f36a3",
    storageBucket: "slack-f36a3.appspot.com",
    messagingSenderId: "473984497696",
    appId: "1:473984497696:web:95019065b4ab959c4be445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);