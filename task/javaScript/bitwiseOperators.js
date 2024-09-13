let a = 5;   // 0101 in binary
let b = 3;   // 0011 in binary

console.log(a & b);  // 1 (0001 in binary)
console.log(a | b);  // 7 (0111 in binary)
console.log(a ^ b);  // 6 (0110 in binary)
console.log(~a);     // -6 (inverts bits)
console.log(a << 1); // 10 (1010 in binary, left shift)
console.log(a >> 1); // 2 (0010 in binary, right shift)
console.log(a >>> 1);// 2 (0010 in binary, unsigned right shift)
