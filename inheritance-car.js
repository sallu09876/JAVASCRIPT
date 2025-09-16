// Car class inheriting from Vehicle class
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  displayInfo() {
    console.log(`Vehicle: ${this.brand} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model);
    this.doors = doors;
  }
  displayInfo() {
    super.displayInfo();
    console.log(`Doors: ${this.doors}`);
  }
}

const car = new Car("BMW", "M5", 4);
car.displayInfo(); // Vehicle: BMW M5
                   // Doors: 4