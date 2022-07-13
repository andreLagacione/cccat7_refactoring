import Coupon from "./Coupon";
import Cpf from "./cpf";
import OrderItem from "./OrderItem";
import Product from "./Product";

export default class Order {
    private items: OrderItem[];
    private cpf: Cpf;
    private coupon?: Coupon;
    private readonly DISTANCE = 1000;
    private readonly DENSITY_FACTOR = 100;

    constructor (cpf: string) {
        this.cpf = new Cpf(cpf);
        this.items = [];
    }

    addItem(product: Product, quantity: number): void {
        if (this.checkIfItemWasAdded(product.id)) throw new Error('Este item já foi adicionado');
        const orderItem = new OrderItem(product, quantity);
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

    checkIfItemWasAdded(itemId: string): boolean {
        return this.items.some(item => item.product.id === itemId);
    }

    calculateFreight(): string {
        let total = this.items.reduce((total, item) => {
            total += this.DISTANCE * item.product.getVolumn() * (item.product.getDensity() / this.DENSITY_FACTOR);
            return total;
        }, 0);

        total = Math.max(total, 10);
        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).replace(/\s/g, '');
    }

    getItems(): OrderItem[] {
        return this.items;
    }
}