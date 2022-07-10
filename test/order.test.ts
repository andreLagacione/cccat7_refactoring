import Coupon from "../src/Coupon";
import Order from "../src/Order";
import Product from "../src/Product";

test('Deve criar um pedido sem produtos', () => {
    const order = new Order('574.019.700-74');
    expect(order.getTotal()).toBe(0);
});

test('Deve lançar erro ao tentar criar pedido com CPF inválido', () => {
    expect(() => new Order('574.019.700-77')).toThrow(new Error('CPF inválido'));
});

test('Deve adicionar três itens no pedido', () => {
    const order = new Order('574.019.700-74');
    order.addItem(new Product('123', 'Capacete', 500), 1);
    order.addItem(new Product('456', 'Sorvete', 14), 2);
    order.addItem(new Product('789', 'Carvão', 22), 3);
    expect(order.items.length).toBe(3);
    expect(order.getTotal()).toBe(594);
});

test('Deve lançar erro ao tentar usar cupom ', () => {
    const order = new Order('574.019.700-74');
    order.addItem(new Product('123', 'Capacete', 500), 1);
    order.addItem(new Product('456', 'Sorvete', 14), 2);
    order.addItem(new Product('789', 'Carvão', 22), 3);
    expect(order.items.length).toBe(3);
    expect(order.getTotal()).toBe(594);
});

// test('Deve adicionar três itens no pedido e adicionar um cupom de desconto', () => {
//     const order = new Order('574.019.700-74');
//     order.addItem(new Product('123', 'Capacete', 500), 1);
//     order.addItem(new Product('456', 'Sorvete', 14), 2);
//     order.addItem(new Product('789', 'Carvão', 22), 3);
//     const coupon = new Coupon('VALE50', 50);
//     order.addCoupon(coupon);
//     expect(order.items.length).toBe(3);
//     expect(order.getTotal()).toBe(297);
// });
