class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  removeItem(product) {
    this.items = this.items.filter((item) => item.product !== product);
  }

  viewCart() {
    console.log(`Cart ID: ${this.cartId}`);
    this.items.forEach((item) => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`);
    });
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}

module.exports = Cart;
