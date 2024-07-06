// Variables type annotation
let apples: Number = 5;
let speed: String = "fast";
let hasName: Boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date();

// Array
let colors: String[] = ["red", "green", "blue"];
let myNumbers: Number[] = [1, 2, 3];
let truths: Boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: Number; y: Number } = {
  x: 10,
  y: 20,
};

// Function (Nasty Version)
const logNumber: (i: Number) => void = (i: Number) => {
  console.log(i);
};

// When to use explicit type annotations?
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: Number; y: Number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }
console.log(coordinates.x); // 10

// 2) Delayed Initialization
let words = ["red", "green", "blue"];
let foundWord: Boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variables that cannot inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: Boolean | Number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
