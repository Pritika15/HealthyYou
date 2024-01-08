// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWcHpdRR8sniiZs8zNi2f1NFzQIBS1z6o",
  authDomain: "healthyyou-2849d.firebaseapp.com",
  projectId: "healthyyou-2849d",
  storageBucket: "healthyyou-2849d.appspot.com",
  messagingSenderId: "647543625127",
  appId: "1:647543625127:web:6e27698a2b3d4126301282",
  measurementId: "G-FZ1ETMZVVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth= getAuth();

export {app, auth};