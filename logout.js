// logout.js

// Get the logout button element
const logoutBtn = document.getElementById('logoutBtn');

// Add a click event listener to the logout button
logoutBtn.addEventListener('click', () => {
    // Sign out the user
    firebase.auth().signOut().then(() => {
        // Sign-out successful
        console.log('Successfully logged out');
        // Redirect to the login page
        window.location.href = 'login.html';
        // Clear the flag to indicate that the user is logged out
        localStorage.setItem('isLoggedIn', 'false');

    }).catch((error) => {
        // An error happened
        console.error('Logout error:', error.message);
    });
});
