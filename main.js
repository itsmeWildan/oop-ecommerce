const Product = require("./product");
const Category = require("./category");
const Cart = require("./cart");
const Order = require("./order");

// Usage example
const product1 = new Product(1, "Laptop", 999, "Powerful laptop");
const product2 = new Product(2, "Smartphone", 599, "High-end smartphone");

const category1 = new Category(101, "Electronics");
const category2 = new Category(102, "Gadgets");

product1.addCategory(category1);
product1.addCategory(category2);
product2.addCategory(category1);

product1.displayInfo();
product2.displayInfo();

category1.displayInfo();
category2.displayInfo();

const cart = new Cart(1);
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.viewCart();

const order = new Order(101);
order.createOrder(cart);
order.displayOrderDetails();
