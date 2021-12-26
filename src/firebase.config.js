import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6V7EdTaAmlw4UYTKOf6Wn55bsMLgsGlo",
  authDomain: "housing-market-app-9085c.firebaseapp.com",
  projectId: "housing-market-app-9085c",
  storageBucket: "housing-market-app-9085c.appspot.com",
  messagingSenderId: "766744014655",
  appId: "1:766744014655:web:27e9b3ae06c27554396d8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
