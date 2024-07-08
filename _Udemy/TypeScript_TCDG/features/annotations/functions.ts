// always explicitly annotate type to function arguments!
// ----------------
// Arrow functions
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// Typical 'function' keyword syntax
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous function applied to variable
const multiply = function (a: number, b: number): number {
  return a * b;
};
