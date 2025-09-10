// Using the rest parameter to sum any number of arguments

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0); // reduce means to accumulate values into a single value
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20, 30, 40, 50, 60)); // 210