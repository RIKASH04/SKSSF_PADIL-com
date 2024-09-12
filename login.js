function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with actual authentication logic
    if (username === 'SKSSF' && password === '1234567') {
        // Store login state in local storage
        localStorage.setItem('loggedIn', 'true');
        // Redirect to scoring page
        window.location.href = 'index.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
    }
}

// Check login status on page load
window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'index.html';
    }
};