// import file javascript
const Product = require("./product");
const Category = require("./category");
const Cart = require("./cart");
const Order = require("./order");

// Example
const product1 = new Product(
  1,
  "Laptop",
  25000000,
  "Perfect for gaming and coding"
);
const product2 = new Product(
  2,
  "Smartphone",
  8000000,
  "Good for call with u boyfriend/girlfriend"
);

const category1 = new Category(101, "Gadgets");
const category2 = new Category(102, "Electronic");

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
