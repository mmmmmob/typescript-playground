// create a blueprint
class Vehicle {
  drive(): void {
    console.log("STARTED THE ENGINE!");
  }

  honk(): void {
    console.log("BEEP!");
  }
}

// /extends/ syntax will inherit all methods and values from existing class to new one
class Car extends Vehicle {
  // /override/ syntax make sure to check if the method we extended and want to overridden exists
  override drive(): void {
    console.log("CAR ENGINE STARTED!");
  }
}

// create new instance from the blueprint with /new/ syntax
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
