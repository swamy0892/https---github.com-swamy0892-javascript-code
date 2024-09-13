/*let a=5;
let b;
b=a;   // copy value of a into b
a=3;
console.log(a); //3
console.log(b);  //5
*/

var y=77;
function f1(x){
    console.log(x);
    x=99;
    console.log(x); // 99
}
f1(y);
console.log(y);  // 77