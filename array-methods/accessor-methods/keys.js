// keys is an array method that returns a new Array Iterator object that contains the keys for each index in the array.
const array = ['a', 'b', 'c'];
const iterator = array.keys();
console.log(iterator.next().value); // Output: 0
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2