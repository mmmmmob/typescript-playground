"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productname = "tote bag";
var product = products_1.default.filter(function (p) { return p.name === productname; });
console.log(product);
if (product[0].preOrder == "true") {
    console.log("We’ll send them a message when it’s on the way.");
}
var price = Number(product[0].price);
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "169 Tree Parkway, San Francisco";
if (price >= 25) {
    shipping = 0;
    console.log("You got FREE shipping!");
}
else {
    shipping = 5;
}
if (shippingAddress.toLowerCase().match("new york")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = price * taxPercent;
total = taxTotal + price + shipping;
console.log("Product name: ".concat(product[0].name, "\nShipping address: ").concat(shippingAddress, "\nPrice: ").concat(price, "\nTax total: ").concat(taxTotal, "\nShipping: ").concat(shipping, "\nTotal amount: ").concat(total));
