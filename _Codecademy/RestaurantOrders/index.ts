import { Order, orders, PriceBracket } from "./orders";
import { Restaurant, restaurants } from "./restaurants";

// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket): number {
  switch (price) {
    case PriceBracket.High:
      return 30.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.Low:
      return 10.0;
  }
}

// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  let filteredOrders: Order[][] = [];
  orders.forEach((order) => {
    const filteredOrder = order.filter((order) => {
      return order.price < getMaxPrice(price);
    });
    filteredOrders.push(filteredOrder);
  });
  return filteredOrders;
}

// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], order: Order[][]) {
  restaurants.forEach((restaurant, index) => {
    if (order[index].length !== 0) {
      console.log(restaurant.name);
      order[index].forEach((order) => {
        console.log(`- ${order.name}: ${order.price}`);
      });
    }
  });
}

// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);
