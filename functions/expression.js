const x = "w3wiki";
console.log(`I like ${x}.`);
// Function call
function greet() {
    return "hello!";
    }
    // hello! I am a student.
    console.log(`${greet()} I am a student.`);
    // Expression evolution
//sum of 5 and 6 is 11.
console.log(`sum of 5 and 6 is ${5+6}.`);

function isEven(x) {
    console.log(`x is ${x%2 == 0 ? 'even': 'odd'}`);
    }
    isEven(4); // x is even

//str.replace( original string , new string / replacement string )
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "Google");
console.log(result);

// replace multiple values in a string
let news = " Heavy Rainfall for four days !"
let latestnews = news.replace('Heavy','High Alert').replace('Rainfall','due to rains');
console.log(latestnews);

