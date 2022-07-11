import Product from "./Product";

export default class OrderItem {
    constructor (readonly product: Product, readonly quantity: number) {
        if (!this.validateItemQuantity(quantity)) throw new Error('A quantidade deve ser maior ou igual a 1');
    }

    getTotal(): number {
        return this.product.price * this.quantity;
    }

    validateItemQuantity(quantity: number): boolean {
        return quantity > 0;
    }
}