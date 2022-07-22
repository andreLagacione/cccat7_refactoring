import Sinon from "sinon";
import Coupon from "../../src/domain/entities/Coupon";

test('deve calcular o disconto', () => {
    const clock = Sinon.useFakeTimers({ now: new Date('2022-07-11T10:00:00') });
    const coupon = new Coupon('VALE30', 30, new Date('2022-07-30T23:59:59'));
    expect(coupon.getDiscount(100)).toBe(70);
    clock.restore();
});

test('deve lançar erro ao tentar usar cupom inválido', () => {
    const clock = Sinon.useFakeTimers({ now: new Date('2022-07-11T10:00:00') });
    expect(() => new Coupon('VALE30', 30, new Date('2022-07-10T23:59:59'))).toThrow(new Error('Cupom expirado'));
    clock.restore();
});
