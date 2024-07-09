// Tuple can represent a mixture type of ordered values
// like the object but without the key
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number]; // annotate types with fixed order as a new tuple /type/ syntax

const pepsi: Drink = ["brown", true, 40];
// with tuple, we cannot change the value with mismatch type
pepsi[0] = 40;

// then we can create new tuple with Drink type
const sprite: Drink = ["clear", true, 30];
const tea: Drink = ["black", false, 0];

// however, with production -- we usually use object instead of tuple due to the more readable code.
