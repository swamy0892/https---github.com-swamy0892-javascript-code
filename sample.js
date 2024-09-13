/*let x=16+20; // addition
let y=20+"react"; // concat
console.log(x);
console.log(y);
console.log(typeof(x)); // number
console.log(typeof(y)); // string
// strings has highest priority

let a="20"+" react-js";
let b="string value";
console.log(a);
console.log(typeof(a)); //string
console.log(b);
console.log(typeof(b)); // string

let z=null;
console.log(z);
console.log(typeof(z)); // object

const languages=["java",30,true,"react"];
console.log(languages);
console.log(typeof(languages));

const sample=[];
sample[0]=1;
sample[1]=22;
sample[2]="sample";
sample[3]=true;
sample[4]=222;
console.log(sample);
console.log(sample[6]);
console.log(typeof(sample))*/

const example=new Array("ex1","ex2",22,true);
console.log(example);
console.log(typeof(example));
example[2]=222;
console.log(example);
example[4]=92;
console.log(example)
example.push(2222);
console.log(example);
example.pop();
console.log(example);