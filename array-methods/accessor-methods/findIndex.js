// find index is an array method that returns the index of the first element in the array that satisfies the provided testing function.

const array = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array.findIndex(isLargeNumber)); // Output: 3   