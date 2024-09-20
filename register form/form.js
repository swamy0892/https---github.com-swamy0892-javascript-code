document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;

    // Validation flags
    let isValid = true;
    let messages = [];

    // Check for empty fields
    if (!username || !email || !password || !mobile) {
        isValid = false;
        messages.push('All fields must be filled out.');
    }

    // Validate username
    if (username.includes(' ')) {
        isValid = false;
        messages.push('Username should not have spaces.');
    }

    // Validate email
    if (!email.endsWith('@gmail.com')) {
        isValid = false;
        messages.push('Email must end with @gmail.com.');
    }

    // Validate password
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const digit = /\d/.test(password);
    if (!(upperCase && lowerCase && digit)) {
        isValid = false;
        messages.push('Password must contain at least one uppercase letter, one lowercase letter, and one digit.');
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
        isValid = false;
        messages.push('Mobile number must be exactly 10 digits long.');
    }

    // Show validation messages
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can proceed with form submission, e.g., AJAX call
    } else {
        alert(messages.join('\n'));
    }
});