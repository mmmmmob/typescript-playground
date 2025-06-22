// * generics on class
class ArrayOfNumber {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const example = new ArrayOfAnything<string>(["a", "b", "c"]);
example.get(2); // 'c'

// * generics on function
const printAnything = <T>(arr: T[]): void => {
  for (const member of arr) {
    console.log(member);
  }
};

// * generics on const

class House {
  print(): void {
    console.log("I am a house");
  }
}

class Car {
  print(): void {
    console.log("I am a car");
  }
}

interface Printable {
  print(): void;
}

// use extends to mark T align with Printable interface aka you better have .print() on hand
function printHouseOrCar<T extends Printable>(arr: T[]) {
  for (const member of arr) {
    member.print();
  }
}

printHouseOrCar([1, 2, 3, 4]); // error because number doesn't have .print() method
printHouseOrCar<Car>([new Car(), new Car()]);
