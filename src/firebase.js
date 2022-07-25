// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFQBWW3bizsWzBf7nrj3KLZZf9Hkh8YbM",
  authDomain: "chat-app-3fd44.firebaseapp.com",
  projectId: "chat-app-3fd44",
  storageBucket: "chat-app-3fd44.appspot.com",
  messagingSenderId: "891047321706",
  appId: "1:891047321706:web:ab96b6ec008244ad78ea13",
  measurementId: "G-KN9HFJ53PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app;
// const analytics = getAnalytics(app);



