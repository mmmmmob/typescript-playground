// always annotate array type when init an empty array
const carMakers: string[] = [];
carMakers.push("Toyota");
carMakers.push("Ford");
carMakers.push("Rolls-Royce");

// if not, we can use the type inference feature of TypeScript
const dates = [new Date(), new Date(), new Date()];

// 2D array will be annotate with /type[][]/
const carsByMake: string[][] = [["Corolla"]];

// TypeScript help inference the type when access array value
const car = carMakers[0];
const myCar = carMakers.pop();

// Also helps in preventing incompatible value
carMakers.push(10); // this results in error

// Get help with array built-in methods
const uppercasedCar = carMakers.map((car: string): string => {
  return car.toUpperCase();
}); // [ "TOYOTA", "FORD" ]

// Can use and check multiple types within an array
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2024-07-10");
importantDates.push(10); // this results in error
