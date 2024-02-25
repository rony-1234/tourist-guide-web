// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLnD9KTmdqM_7Sef1Jb80ucDCDTDdYQ4Y",
  authDomain: "dimple-firebase-project-7033e.firebaseapp.com",
  projectId: "dimple-firebase-project-7033e",
  storageBucket: "dimple-firebase-project-7033e.appspot.com",
  messagingSenderId: "568812390778",
  appId: "1:568812390778:web:325a98c07a9c832325aec3",
  measurementId: "G-KF5MS7PV4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app