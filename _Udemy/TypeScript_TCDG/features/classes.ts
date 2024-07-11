// create a blueprint
class Vehicle {
  // modifier: public = as a default access control -> can access this method from anywhere at anytime
  public drive(): void {
    console.log("STARTED THE ENGINE!");
  }

  // modifier: protected = can access only within its class and classes that extends (can't be called outside)
  protected honk(): void {
    console.log("BEEP!");
  }
}

// /extends/ syntax will inherit all methods and values from existing class to new one
class Car extends Vehicle {
  // /override/ syntax make sure to check if the method we extended and want to overridden exists
  override drive(): void {
    console.log("CAR ENGINE STARTED!");
  }

  // modifier: private = can be accessed within its class only
  private accelerate(): void {
    this.honk();
    console.log("GO STRAIGHT AT 60MPH.");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk(); // <- this can be used because the parent class marked it as 'protected'
    this.accelerate();
  }
}

// create new instance from the blueprint with /new/ syntax
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk(); // <- this resulted in error

const car = new Car();
car.startDrivingProcess();
