// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

const num = [10, 20, 30, 40, 50];
const slicedNum = num.slice(1, 3); // Extracts elements from index 1 to 3 (not including index 3)
console.log(slicedNum); // Output: [20, 30]