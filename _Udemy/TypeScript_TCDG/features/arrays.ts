// always annotate array type when init an empty array
const carMakers: string[] = [];
carMakers.push("Toyota");

// if not, we can use the type inference feature of TypeScript
const dates = [new Date(), new Date(), new Date()];

// 2D array will be annotate with /type[][]/
const carsByMake: string[][] = [["Corolla"]];
