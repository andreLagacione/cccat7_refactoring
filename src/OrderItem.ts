export default class OrderItem {
    constructor (readonly idItem: string, readonly price: number, readonly quantity: number) {
        this.idItem = idItem;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal(): number {
        return this.price * this.quantity;
    }
}