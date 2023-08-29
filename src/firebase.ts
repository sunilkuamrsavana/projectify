import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore
} from "firebase/firestore";
import{getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyASFLZUJV0pccDPnltclkALUkRkNYDaoDk",
    authDomain: "project-management-31c19.firebaseapp.com",
    projectId: "project-management-31c19",
    storageBucket: "project-management-31c19.appspot.com",
    messagingSenderId: "756270675353",
    appId: "1:756270675353:web:51837eae9b570504b34f08",
    measurementId: "G-MRY8ECL98K"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app)
export const tasks=collection(db,"tasks")
