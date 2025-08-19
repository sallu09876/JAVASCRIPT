let a = 5;
let b = '5';
let c = 3;
let d = 4;

console.log("a == b:", a == b);        // Loose equality: true (value is equal, type is different)
console.log("a === b:", a === b);      // Strict equality: false (value is equal, type are different)

console.log("a != b:", a != b);        // Loose inequality: false (value is equal, type is different)
console.log("a !== b:", a !== b);      // Strict inequality: true (value is equal, type is different)

console.log("a > c:", a > c);          // Greater than: true
console.log("a < c:", a < c);          // Less than: false

console.log("a >= c:", a >= c);        // Greater than or equal to: true
console.log("a <= c:", a <= c);        // Less than or equal to: false