class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
  }

  createOrder(cart) {
    this.items = [...cart.items];
    this.totalAmount = cart.calculateTotal();
  }

  displayOrderDetails() {
    console.log(`Order ID: ${this.orderId}`);
    this.items.forEach((item) => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`);
    });
    console.log(`Total Amount: $${this.totalAmount}`);
  }
}

module.exports = Order;
