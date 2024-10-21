"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orders_1 = require("./orders");
var restaurants_1 = require("./restaurants");
// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.High:
            return 30.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.Low:
            return 10.0;
    }
}
// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders.forEach(function (order) {
        var filteredOrder = order.filter(function (order) {
            return order.price < getMaxPrice(price);
        });
        filteredOrders.push(filteredOrder);
    });
    return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(restaurants, order) {
    restaurants.forEach(function (restaurant, index) {
        if (order[index].length !== 0) {
            console.log(restaurant.name);
            order[index].forEach(function (order) {
                console.log("- ".concat(order.name, ": ").concat(order.price));
            });
        }
    });
}
// Main
var eligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, eligibleOrders);
