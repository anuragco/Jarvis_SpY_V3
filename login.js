// login.js

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCY1-9yRZ06UcSfafYyyLFjEd-ZBleZvuk",
    authDomain: "jarvis-fdba3.firebaseapp.com",
    databaseURL: "https://jarvis-fdba3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jarvis-fdba3",
    storageBucket: "jarvis-fdba3.appspot.com",
    messagingSenderId: "314979376464",
    appId: "1:314979376464:web:70f51919576caef212e055"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get the login form element
const loginForm = document.getElementById('loginForm');

// Add a submit event listener to the form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    // Get user input (email and password)
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
    
    // Sign in with Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User is signed in, you can redirect to the home page or perform other actions.
            // For now, let's log a success message.
            console.log('Successfully logged in:', userCredential.user.email);
            window.location.href = 'index.html'; // Redirect after successful login
            // After successful login
            // Set a flag to indicate that the user is logged in
            localStorage.setItem('isLoggedIn', 'true');

            // Check if the user is already logged in
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn === 'true') {
             // Redirect to the home page (or another authorized page)
            window.location.href = 'index.html';
                
            }


        })
        .catch((error) => {
            // Handle errors, e.g., display error messages to the user
            alert('EMail/Password is incorrect! Please try again')
            console.error('Login error:', error.message);
            // You can optionally display an error message on the page, for example:
            // const errorMessageElement = document.getElementById('errorMessage');
            // errorMessageElement.textContent = 'Login failed. Please check your credentials.';
        });
});
