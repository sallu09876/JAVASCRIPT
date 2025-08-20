// Logical AND (&&)
console.log("true & true:", true && true); // true
console.log("true & false:", true && false); // false

let a = 5;
let b = 10; 
let x = a > b && a < b; // false
console.log("a > b && a < b:", x); // false

// Logical OR (||)
console.log("true || true:", true || true); // true
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false

let y = a < b || a > b; // true
console.log("a < b || a > b:", y); // true

// Logical NOT (!)
console.log("!true:", !true); // false
console.log("!false:", !false); // true

let z = !(a < b); // false
console.log("!(a < b):", z); // false
