import Coupon from "../src/Coupon";

test('deve calcular o disconto', () => {
    const coupon = new Coupon('VALE30', 30);
    expect(coupon.getDiscount(100)).toBe(70);
});
