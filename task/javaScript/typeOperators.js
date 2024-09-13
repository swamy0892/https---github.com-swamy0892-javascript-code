let num = 42;
let str = "Hello";

console.log(typeof num);  // number
console.log(typeof str);  // string
console.log(num instanceof Number); // false
console.log(str instanceof String); // false

// Objects
let obj = new Number(42);
console.log(obj instanceof Number); // true
