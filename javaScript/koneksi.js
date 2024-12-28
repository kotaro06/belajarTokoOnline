// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase,  ref, set, child, get, update, remove, onValue, orderByChild, limitToLast} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdDIprdjTALGP4yomTZjFq7gk5H2TqY0g",
  authDomain: "belajartokoonlinea.firebaseapp.com",
  databaseURL: "https://belajartokoonlinea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajartokoonlinea",
  storageBucket: "belajartokoonlinea.firebasestorage.app",
  messagingSenderId: "352491087254",
  appId: "1:352491087254:web:4144b6bc4f0bcf0ded29b7",
  measurementId: "G-3RH04H2KRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const  dbRef = ref(database);

export { database };