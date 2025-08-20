// same as Reducer, but starts from right to left of the array
const numbers = [10, 20];
// Using reduceRight to sum all numbers in the array from right to left
const sumRight = numbers.reduceRight((accumulator, num) => accumulator - num, 0);
console.log(sumRight); // Output: -30