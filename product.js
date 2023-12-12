class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.categories = [];
  }

  //   display product, price, description, categories
  displayInfo() {
    console.log(`Product ID: ${this.productId}`);
    console.log(`Product Name: ${this.productName}`);
    console.log(`Price: Rp.${this.price}`);
    console.log(`Description: ${this.description}`);
    console.log(`Categories: ${this.categories.join(", ")}`);
  }

  //   update product
  updateProduct(newProductName, newPrice, newDescription) {
    this.productName = newProductName;
    this.price = newPrice;
    this.description = newDescription;
  }

  //   add category
  addCategory(category) {
    this.categories.push(category);
  }
}

module.exports = Product;
