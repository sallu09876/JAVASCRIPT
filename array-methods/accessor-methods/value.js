// value is an array method that returns a new Array Iterator object that contains the values for each index in the array.
const array = ['a', 'b', 'c'];
const iterator = array.values();
console.log(iterator.next().value); // Output: 'a'
console.log(iterator.next().value); // Output: 'b'
console.log(iterator.next().value); // Output: 'c'
