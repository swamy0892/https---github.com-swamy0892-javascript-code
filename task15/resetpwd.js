document.addEventListener('DOMContentLoaded', () => {
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const copyError = document.getElementById('copyError');
    const pasteError = document.getElementById('pasteError');

    // Disable right-click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Restrict copy operation
    newPasswordInput.addEventListener('copy', (e) => {
        e.preventDefault();
        copyError.innerText = 'Copy is restricted';
        copyError.style.display = 'block';
    });

    confirmPasswordInput.addEventListener('copy', (e) => {
        e.preventDefault();
        copyError.innerText = 'Copy is restricted';
        copyError.style.display = 'block';
    });

    // Restrict paste operation
    newPasswordInput.addEventListener('paste', (e) => {
        e.preventDefault();
        pasteError.innerText = 'Paste is restricted';
        pasteError.style.display = 'block';
    });

    confirmPasswordInput.addEventListener('paste', (e) => {
        e.preventDefault();
        pasteError.innerText = 'Paste is restricted';
        pasteError.style.display = 'block';
    });

    // Hide error messages on input
    newPasswordInput.addEventListener('input', () => {
        copyError.style.display = 'none';
        pasteError.style.display = 'none';
    });

    confirmPasswordInput.addEventListener('input', () => {
        copyError.style.display = 'none';
        pasteError.style.display = 'none';
    });
});
