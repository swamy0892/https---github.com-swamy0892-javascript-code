function findUnique() {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(item => item.trim());
    const uniqueElements = [...new Set(array)];
    
    document.getElementById('result').innerText = uniqueElements.join(', ');
}
