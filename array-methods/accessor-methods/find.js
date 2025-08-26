// find is an array method that returns the value of the first element in the array that satisfies the provided testing function.

const array = [1, 3, 5, 7, 9, 12, 15];
const found = array.find(element => element > 10);
console.log(found); // Output: 12