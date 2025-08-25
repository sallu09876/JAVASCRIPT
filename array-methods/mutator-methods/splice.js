// splice adds/removes items to/from an array, and returns the removed item(s).
// It modifies the original array.

let fruits = ['apple', 'banana', 'orange', 'grape'];
// Remove 1 item at index 2 
let removedFruits = fruits.splice(2, 1);
console.log(fruits); // Output: ['apple', 'banana', 'grape']

// Add 'kiwi' and 'mango' at index 1
fruits.splice(1, 0, 'kiwi', 'mango');   
console.log(fruits); // Output: ['apple', 'kiwi', 'mango', 'banana', 'grape']

// Replace 1 item at index 3 with 'peach'
fruits.splice(3, 1, 'peach');
console.log(fruits); // Output: ['apple', 'kiwi', 'mango', 'peach', 'grape']