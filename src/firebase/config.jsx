import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBBWg5gaylsvj5vfFnfm8LpYfMlSLdRKaQ",
    authDomain: "miniblog-c65a5.firebaseapp.com",
    projectId: "miniblog-c65a5",
    storageBucket: "miniblog-c65a5.appspot.com",
    messagingSenderId: "1055456745820",
    appId: "1:1055456745820:web:9fdf91414a37f7a2da4999"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };