let x = 10
console.log("x =", x);                // Assignment: 10

x += 5;                               // Addition assignment: x = x + 5
console.log("x after x += 5 =", x);   // Now x is 15

x -= 3;                               // Subtraction assignment: x = x - 3
console.log("x after x -= 3 =", x);   // Now x is 12

x *= 2;                               // Multiplication assignment: x = x * 2
console.log("x after x *= 2 =", x);   // Now x is 24

x /= 4;                               // Division assignment: x = x / 4
console.log("x after x /= 4 =", x);   // Now x is 6

x %= 2;                               // Modulus assignment: x = x % 2
console.log("x after x %= 2 =", x);   // Now x is 0

let y = 3;
let z = 2;
y **= z;                              // Exponentiation assignment: y = y ** z
console.log("y after y **= z =", y);  // Now y is 9