class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = [];
  }

  //   add item product, quantity
  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  //   remove or delete product
  removeItem(product) {
    this.items = this.items.filter((item) => item.product !== product);
  }

  //   display cart
  viewCart() {
    console.log(`Cart ID: ${this.cartId}`);
    this.items.forEach((item) => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`);
    });
  }

  //   total
  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}

module.exports = Cart;
