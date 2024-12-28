// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

// Export components
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
