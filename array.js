const cars= ["saab","volvo","BMW"];
console.log(cars); // accessing elements
let firstitem=cars[1];
console.log("firstitem:",firstitem); // accessing firstitem
let lastitem=cars[cars.length-1];
console.log("lastitem:",lastitem); // accessing lastitem
cars[0]="audo"; // modifiy elements
console.log(cars);
console.log(typeof(cars)); // typeof elements
cars.push("RR"); // adding elements in last an array
cars.unshift("farari"); // adding elements in first an array
console.log(cars);
let lastItem=cars.pop();  //removing elements
console.log("After removeing last elements:"+cars);
let firstItem=cars.shift();
console.log("After removing firstitem:"+cars);
cars.splice(2);
console.log("After removeing first 2 elements:"+cars);
let len=cars.length;
console.log("length of the array:"+len);
cars.length=6;
console.log("After increase array length:"+cars);
cars.length=4;
console.log(" After remove the length:"+cars);

let carsColours=["black","green","grea","ligthblue"];
let concateArray=cars.concat(carsColours);
console.log("concate Array:",concateArray);

console.log(cars.toString);


