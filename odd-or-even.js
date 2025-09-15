function checkOddEven(...numbers) {
  numbers.forEach(num => {
    if (num % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  });
}

// Example usage:
checkOddEven(10, 15, 22, 37, 50);