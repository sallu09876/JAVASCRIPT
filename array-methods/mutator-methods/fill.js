// fill is a mutator method that changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

let numbers = [1, 2, 3, 4, 5];
numbers.fill(0,1,3); // Fill with 0 from index 1 to 3
console.log(numbers); // Output: [1, 0, 0, 4, 5]