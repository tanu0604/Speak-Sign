import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"; // Make sure versions match

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX_vA3he_0rUCdZrrjeoAM-HXCNM3G0YQ",
  authDomain: "speak2sign-eb526.firebaseapp.com",
  projectId: "speak2sign-eb526",
  storageBucket: "speak2sign-eb526.appspot.com",
  messagingSenderId: "943656408527",
  appId: "1:943656408527:web:1afdf84a64436fd17daeba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Make sure this comes after app initialization

// Handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Login successfully!");
            window.location.href = "dashboard.html"; // Redirect to dashboard on success
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
