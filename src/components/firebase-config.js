// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9IQH6qeizAs4DDSoOGVdvhQLEHoOaaXE",
  authDomain: "cyha-mvp.firebaseapp.com",
  projectId: "cyha-mvp",
  storageBucket: "cyha-mvp.appspot.com",
  messagingSenderId: "665376359116",
  appId: "1:665376359116:web:5f8565dda90471a7db3869",
  measurementId: "G-K4F1BRWEKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);