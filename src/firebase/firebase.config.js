// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhqRnAs-9jE_zOLNdHdhJIFEMrciKYrw0",
  authDomain: "educational-events.firebaseapp.com",
  projectId: "educational-events",
  storageBucket: "educational-events.appspot.com",
  messagingSenderId: "1083526070024",
  appId: "1:1083526070024:web:bb0a15bcd154cd8a2ab6bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app