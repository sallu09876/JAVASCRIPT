// Object is a non-primitive type in JavaScript, meaning it can hold collections of values and more complex entities. Objects are created using curly braces `{}` and can contain key-value pairs. Used to store multiple values in a single variable, objects can represent real-world entities with properties and methods.
// Example of an object representing a person with various properties.
const person = {
    name: "John Doe",     
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
};
// Accessing properties of the object using dot notation
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
// Accessing nested properties  
console.log(person.address.city); // Output: Anytown
// Adding a new property to the object  
person.email = "jd@gmail.com";
// Output the updated object
console.log(person);
// modifying the object by changing a property value
person.age = 31;
console.log(person.age); // Output: 31