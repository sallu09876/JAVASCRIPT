// flat is an array method that creates a new array with all sub-array elements concatenated into it recursively up to the specified depth 
// (array levels).

const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, [4], 5]
