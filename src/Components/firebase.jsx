// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ3D4L33cKHAWVR6a2IDZelfqYe21WV78",
  authDomain: "daily-planner-f0433.firebaseapp.com",
  databaseURL: "https://daily-planner-f0433-default-rtdb.firebaseio.com",
  projectId: "daily-planner-f0433",
  storageBucket: "daily-planner-f0433.appspot.com",
  messagingSenderId: "1006470152796",
  appId: "1:1006470152796:web:8065d2f0c45b67fe7adc99",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);

export { firebase, db };
