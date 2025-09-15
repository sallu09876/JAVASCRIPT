// Array destructuring assignment

const numbers = [1, 2, 3, 4, 5];
const [a, b] = numbers;
console.log(a); // 1
console.log(b); // 2

// Skipping elements
const [, , c] = numbers;
console.log(c); // 3

// Using rest operator
const [x, ...rest] = numbers;
console.log(x); // 1
console.log(rest); // [2, 3, 4, 5]