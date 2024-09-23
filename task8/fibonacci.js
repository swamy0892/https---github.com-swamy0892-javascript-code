document.getElementById('generateBtn').addEventListener('click', function() {
    const numTerms = parseInt(document.getElementById('terms').value);
    const fibonacciSeries = generateFibonacci(numTerms);
    displayReverseFibonacci(fibonacciSeries);
});

function generateFibonacci(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series.slice(0, n);
}

function displayReverseFibonacci(series) {
    const list = document.getElementById('fibonacciList');
    list.innerHTML = ''; // Clear the list before displaying new series
    for (let i = series.length - 1; i >= 0; i--) {
        const listItem = document.createElement('li');
        listItem.textContent = series[i];
        list.appendChild(listItem);
    }
}
