document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginOption = document.getElementById('loginOption').value;
    const loginInput = document.getElementById('loginInput').value;
    const password = document.getElementById('password').value;
    const errorText = document.getElementById('error');

    let isValid = true;
    errorText.innerText = '';

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        isValid = false;
        errorText.innerText += 'Password must be at least 8 characters long and include an upper case letter, a lower case letter, a digit, and a special character.\n';
    }

    // Validate login input based on selected option
    if (loginOption === 'email') {
        if (!loginInput.endsWith('@gmail.com')) {
            isValid = false;
            errorText.innerText += 'Email must end with @gmail.com.\n';
        }
    } else if (loginOption === 'username') {
        const usernameRegex = /^[A-Za-z]+$/; // No digits or spaces
        if (!usernameRegex.test(loginInput)) {
            isValid = false;
            errorText.innerText += 'Username must not contain spaces or digits.\n';
        }
    } else if (loginOption === 'mobile') {
        const mobileRegex = /^\d{10}$/; // Exactly 10 digits
        if (!mobileRegex.test(loginInput)) {
            isValid = false;
            errorText.innerText += 'Mobile number must be exactly 10 digits.\n';
        }
    }

    // Show success message or errors
    if (isValid) {
        alert('Login successful!');
        // Here you could proceed with the login
    }
});
