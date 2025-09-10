// Using the spread operator to pass an object to a function

function displayInfo({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
const user = { name: 'Avanthika', age: 20, city: 'Kerala' };
displayInfo({ ...user });
