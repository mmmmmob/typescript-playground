import products from "./products";

let productname: string = "tote bag";
let product = products.filter((p) => p.name === productname);
console.log(product);

if (product[0].preOrder == "true") {
  console.log("We’ll send them a message when it’s on the way.");
}

let price = Number(product[0].price);
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "169 Tree Parkway, San Francisco";

if (price >= 25) {
  shipping = 0;
  console.log("You got FREE shipping!");
} else {
  shipping = 5;
}

if (shippingAddress.toLowerCase().match("new york")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = price * taxPercent;
total = taxTotal + price + shipping;

console.log(
  `Product name: ${product[0].name}\nShipping address: ${shippingAddress}\nPrice: ${price}\nTax total: ${taxTotal}\nShipping: ${shipping}\nTotal amount: ${total}`
);
