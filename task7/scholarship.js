function checkEligibility() {
    const name = document.getElementById('studentName').value;
    const gpa = parseFloat(document.getElementById('gpa').value);
    const result = document.getElementById('result');

    if (gpa >= 7.5) {
        result.textContent = `${name}, you are eligible for the scholarship!`;
        result.style.color = 'green';
    } else {
        result.textContent = `${name}, you are not eligible for the scholarship.`;
        result.style.color = 'red';
    }
}