// Function with default parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5)); // 10
console.log(multiply(5, 5)); // 25