export default class Coupon {
    constructor(readonly name: string, readonly percentage: number) {
        this.name = name;
        this.percentage = percentage;
    }

    getDiscount(total: number): number {
        const discount = total * (this.percentage / 100);
        return total - discount;
    }
}