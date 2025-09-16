// inheritance means to acquire the properties and behaviors (methods) of another class.
// This allows for code reusability and the creation of hierarchical relationships between classes.
// Class inheritance example
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {

    constructor(name, breed) {
      super(name); // Call the parent class constructor
      this.breed = breed;
    }
    info() {
      console.log(`${this.name} is a ${this.breed}.`);
    }
}

const dog = new Dog("Rex", "Golden Retriever");
dog.speak(); // Rex makes a noise.
dog.info(); // Rex is a Golden Retriever.