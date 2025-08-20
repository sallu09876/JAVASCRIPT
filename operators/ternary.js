// condition ? trueExpression : falseExpression
// Example:
const isEven = (num) => num % 2 === 0;
const result = isEven(4) ? 'Even' : 'Odd'; // result will be 'Even'
// Explanation: This code checks if the number 4 is even using a ternary operator.
// If the condition is true, it returns 'Even'; otherwise, it returns 'Odd'.

// Ternary Operator Example
let age = 18;
let canVote = (age >= 18) ? 'Eligible to vote' : 'Not eligible to vote';
console.log(canVote); // Output: Eligible to vote