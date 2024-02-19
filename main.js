
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth , GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKsZdFLhTsR4Q_YVXl7IXO13ZRfeTGc7U",
    authDomain: "e-kissan-c54f1.firebaseapp.com",
    projectId: "e-kissan-c54f1",
    storageBucket: "e-kissan-c54f1.appspot.com",
    messagingSenderId: "855697182757",
    appId: "1:855697182757:web:0b0e3e89f19a50a06f6fcc",
    measurementId: "G-V4Q2CTP32M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


