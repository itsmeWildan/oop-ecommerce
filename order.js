class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
  }

  //   create order
  createOrder(cart) {
    this.items = [...cart.items];
    this.totalAmount = cart.calculateTotal();
  }

  //   display order detail
  displayOrderDetails() {
    console.log(`Order ID: ${this.orderId}`);
    this.items.forEach((item) => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`);
    });
    console.log(`Total Amount: Rp.${this.totalAmount}`);
  }
}

module.exports = Order;
