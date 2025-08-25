// sort sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings.

let num = [3, 1, 4, 1, 5, 9];
num.sort(); // Default sort (as strings)
console.log(num); // Output: [1, 1, 3, 4, 5, 9]

let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // Sort numbers in ascending order
console.log('Ascending ordr: ', numbers); // Output: [1, 5, 10, 25, 40, 100]

numbers.sort((a, b) => b - a); // Sort numbers in descending order
console.log('Descending order: ', numbers); // Output: [100, 40, 25, 10, 5, 1]

let fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort(); // Sort strings in alphabetical order
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']

let fruits2 = ['banana', 'fig', 'apple', 'kiwi', 'grape'];
fruits2.sort((a, b) => b.localeCompare(a)); // Sort strings in reverse alphabetical order
console.log(fruits2); // Output: ['kiwi', 'grape', 'fig', 'banana', 'apple']