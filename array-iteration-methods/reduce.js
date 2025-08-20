// reduse the array to a single value
const numbers = [1, 2, 3, 4, 5];
// Using reduce to sum all numbers in the array 
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // Output: 15