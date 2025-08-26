// copyWithin(target, start, end) method copies part of an array to another location in the same array and returns it without modifying its length.

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // Copies elements from index 3 to the end to the start
console.log(arr); // [4, 5, 3, 4, 5]

// 0 is the target index where the copied elements will be placed
// 3 is the start index from where to copy elements from
// end is optional and defaults to the array's length if not provided
