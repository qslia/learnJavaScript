class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`${this.name} - ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product('Product 1', 100.223);
const product2 = new Product('Product 2', 200.33);
product1.displayProduct();
product2.displayProduct();

const salesTax = 0.1;
const total1 = product1.calculateTotal(salesTax);
const total2 = product2.calculateTotal(salesTax);
console.log(`Total 1: ${total1.toFixed(2)}`);
console.log(`Total 2: ${total2.toFixed(2)}`);