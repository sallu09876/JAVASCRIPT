// entries is an array method that returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array = ['a', 'b', 'c'];
const iterator = array.entries();
console.log(iterator.next().value); // Output: [0, 'a']
console.log(iterator.next().value); // Output: [1, 'b']
console.log(iterator.next().value); // Output: [2, 'c']