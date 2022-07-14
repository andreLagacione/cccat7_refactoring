export default class Coupon {
    
    constructor(readonly code: string, readonly percentage: number, readonly expireDate: Date) {}

    isExpired(date: Date): boolean {
        return this.expireDate.getTime() > date.getTime();
    }

    getDiscount(total: number): number {
        return (total * this.percentage)/100;
    }

}