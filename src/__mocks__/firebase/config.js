import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";

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

export const db = getFirestore(app);
connectFirestoreEmulator(db, '127.0.0.1', 8080);