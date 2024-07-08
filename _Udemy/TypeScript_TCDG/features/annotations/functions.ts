// !! always explicitly annotate type to function arguments!
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

// function that doesn't return any value (void type)
const logger = (message: string): void => {
  console.log(message);
};

// 'never' type represents values that never occur
const throwError = (message: string): never => {
  throw new Error(message);
};

// above case can't reach the end of the function compared to this case so we annotate string type on return value
const optionalThrowError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// use destructuring syntax with object
const todaysWeather = {
  date: new Date(),
  weather: "Today's Sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
