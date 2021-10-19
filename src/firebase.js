// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhuJtgqS3avgB8T44Zp8Whp3tzv_x6UKg",
  authDomain: "tienda-react-brodsky.firebaseapp.com",
  projectId: "tienda-react-brodsky",
  storageBucket: "tienda-react-brodsky.appspot.com",
  messagingSenderId: "106581010667",
  appId: "1:106581010667:web:831a134838daefc7cff6ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db