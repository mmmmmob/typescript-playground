// create a blueprint
class Vehicle {
  /*
  color: string;

  constructor(color: string) {
    this.color = color;
  }
  */

  // init value with /constructor/ syntax :: this shortened line equivalent to above full constructor ⬆️
  constructor(public color: string) {}

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

  // inherited class with their own constructor must include super() to indicate its parent constructor
  // can be indicate with second argument
  constructor(public wheels: number, color: string) {
    super(color);
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
// must contain parameter required by constructor in its class
const vehicle = new Vehicle("orange");
vehicle.drive();
vehicle.honk(); // <- this resulted in error
console.log(vehicle.color); // 'orange'

const car = new Car(4, "red");
car.startDrivingProcess();
console.log(car.color); // 'red'
console.log(car.wheels); // 4
