// Object destructuring assignment

const person = {
  name: "John",
  age: 30,
  location: "New York"
};

// Basic destructuring
const { name, age } = person;
console.log(name); // John
console.log(age); // 30

// Renaming variables
const { location: city } = person;
console.log(city); // New York

// Default values
const { country = "USA" } = person;
console.log(country); // USA

// Using rest operator
const { name: personName, ...rest } = person;
console.log(personName); // John
console.log(rest); // { age: 30, location: 'New York' }