const array = [5, 3, 8, 1, 2];
const sortedArray = array.sort((a, b) => b - a);
document.getElementById('result').innerText = `Sorted Array: ${sortedArray}`;
