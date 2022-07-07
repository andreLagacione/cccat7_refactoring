export default class Product {
    constructor (readonly id: string, readonly description: string, readonly price: number) {
        this.id = id;
        this.description = description;
        this.price = price;
    }
}