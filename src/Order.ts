import Coupon from "./Coupon";
import Cpf from "./cpf";
import OrderItem from "./OrderItem";
import Product from "./Product";

export default class Order {
    items: OrderItem[];
    cpf: Cpf;
    coupon?: Coupon;

    constructor (cpf: string) {
        this.cpf = new Cpf(cpf);
        this.items = [];
    }

    addItem(product: Product, quantity: number): void {
        const orderItem = new OrderItem(product.id, product.price, quantity);
        this.items.push(orderItem);
    }

    addCoupon(coupon: Coupon): void {
        this.coupon = coupon;
    }

    getTotal(): number {
        let total = this.items.reduce((total, item) => {
            total += item.getTotal();
            return total;
        }, 0);

        if (this.coupon) {
            total -= this.coupon.getDiscount(total);
        }

        return total;
    }
}