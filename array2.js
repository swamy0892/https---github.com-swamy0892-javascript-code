const arrone=["java","css","bootstrap",34,56,true];
console.log(arrone);
arrone.shift();
console.log(arrone);
arrone.pop();
console.log(arrone);
arrone.splice(2,1,78);
console.log(arrone.length);
arrone.length=3;
console.log(arrone.length);
console.log(arrone);
arrone.length=9;
console.log(arrone);
arrone.push("react");
arrone.push("nextjs");
arrone.push(67);
arrone.push(90);
console.log(arrone);
const arrtwo=[34,56,77,88,99];
const concatarray=arrtwo.concat(arrone);
console.log(concatarray);
const concatarrtwo=arrone.concat(arrtwo);
console.log(typeof(concatarrtwo));
console.log(concatarrtwo[4]);