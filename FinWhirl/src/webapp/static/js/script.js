// script.js

// Function to handle user login
function loginUser() {
    // Get username and password from form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Make HTTP request to backend for authentication
    fetch('/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // Redirect to home page upon successful login
            window.location.href = '/home';
        } else {
            // Display error message if login fails
            document.getElementById('login-error').innerText = 'Invalid username or password.';
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to handle user registration
function registerUser() {
    // Get username and password from form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Make HTTP request to backend to register user
    fetch('/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // Redirect to login page after successful registration
            window.location.href = '/login';
        } else {
            // Display error message if registration fails
            document.getElementById('registration-error').innerText = 'Username already exists.';
        }
    })
    .catch(error => console.error('Error:', error));
}
