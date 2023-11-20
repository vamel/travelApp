// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj27VHnrRqnuy81dVkvuzeNWf-jjWBwOg",
  authDomain: "travel-app-bd756.firebaseapp.com",
  projectId: "travel-app-bd756",
  storageBucket: "travel-app-bd756.appspot.com",
  messagingSenderId: "640595299801",
  appId: "1:640595299801:web:64f54a94404dd37372ddc8",
  measurementId: "G-9SBY60B2BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default {app, auth, db};