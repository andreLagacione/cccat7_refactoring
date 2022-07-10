export default class Coupon {
    constructor(readonly name: string, readonly percentage: number, readonly expirationDate: Date) {
        if (!this.isCouponExpired(expirationDate)) throw new Error('Cupom expirado');
        this.name = name;
        this.percentage = percentage;
        this.expirationDate = expirationDate;
    }

    getDiscount(total: number): number {
        const discount = total * (this.percentage / 100);
        return total - discount;
    }

    isCouponExpired(expirationDate: Date) {
        const now = new Date().getTime();
        const expirationDateTime = new Date(expirationDate).getTime();
        return now < expirationDateTime;
    }
}