import Sinon from "sinon";
import Coupon from "../src/Coupon";
import Order from "../src/Order";
import Product from "../src/Product";
import ProductVolumn from "../src/ProductVolumn";

test('Deve criar um pedido sem produtos', () => {
    const order = new Order('574.019.700-74');
    expect(order.getTotal()).toBe(0);
});

test('Deve lançar erro ao tentar criar pedido com CPF inválido', () => {
    expect(() => new Order('574.019.700-77')).toThrow(new Error('CPF inválido'));
});

test('Deve adicionar três itens no pedido', () => {
    const order = new Order('574.019.700-74');
    const volumnHelment = new ProductVolumn(32, 18, 21);
    const helmet = new Product('123', 'Capacete', 500, volumnHelment, 5);
    const volumnIcecream = new ProductVolumn(5, 2, 8);
    const iceCream = new Product('456', 'Sorvete', 14, volumnIcecream, 1);
    const volumnCoal = new ProductVolumn(100, 75, 92);
    const coal = new Product('789', 'Carvão', 22, volumnCoal, 10);
    order.addItem(helmet, 1);
    order.addItem(iceCream, 2);
    order.addItem(coal, 3);
    expect(order.getItems().length).toBe(3);
    expect(order.getTotal()).toBe(594);
});

test('Deve adicionar três itens no pedido e adicionar um cupom de desconto válido', () => {
    const clock = Sinon.useFakeTimers({ now: new Date('2022-07-11T10:00:00') });
    const order = new Order('574.019.700-74');
    const volumnHelment = new ProductVolumn(32, 18, 21);
    const helmet = new Product('123', 'Capacete', 500, volumnHelment, 5);
    const volumnIcecream = new ProductVolumn(5, 2, 8);
    const iceCream = new Product('456', 'Sorvete', 14, volumnIcecream, 1);
    const volumnCoal = new ProductVolumn(100, 75, 92);
    const coal = new Product('789', 'Carvão', 22, volumnCoal, 10);
    order.addItem(helmet, 1);
    order.addItem(iceCream, 2);
    order.addItem(coal, 3);
    const coupon = new Coupon('VALE50', 50, new Date('2022-07-30T23:59:59'));
    order.addCoupon(coupon);
    expect(order.getItems().length).toBe(3);
    expect(order.getTotal()).toBe(297);
    clock.restore();
});

test('Deve retornar erro ao criar o pedido com cupom de desconto inválido', () => {
    const clock = Sinon.useFakeTimers({ now: new Date('2022-07-11T10:00:00') });
    const order = new Order('574.019.700-74');
    const volumnHelment = new ProductVolumn(32, 18, 21);
    const helmet = new Product('123', 'Capacete', 500, volumnHelment, 5);
    const volumnIcecream = new ProductVolumn(5, 2, 8);
    const iceCream = new Product('456', 'Sorvete', 14, volumnIcecream, 1);
    const volumnCoal = new ProductVolumn(100, 75, 92);
    const coal = new Product('789', 'Carvão', 22, volumnCoal, 10);
    order.addItem(helmet, 1);
    order.addItem(iceCream, 2);
    order.addItem(coal, 3);
    expect(
        () => order.addCoupon(
            new Coupon('VALE50', 50, new Date('2022-07-10T23:59:59'))
        )
    ).toThrow(new Error('Cupom expirado'));
    expect(order.getItems().length).toBe(3);
    expect(order.getTotal()).toBe(594);
    clock.restore();
});

test('Deve retornar erro ao adicionar um item com quantidade menos que 1', () => {
    const order = new Order('574.019.700-74');
    const volumnHelment = new ProductVolumn(32, 18, 21);
    const helmet = new Product('123', 'Capacete', 500, volumnHelment, 5);
    expect(
        () => order.addItem(helmet, -1)
    ).toThrow(new Error('A quantidade deve ser maior ou igual a 1'));
    expect(order.getItems().length).toBe(0);
    expect(order.getTotal()).toBe(0);
});

test('Deve retornar erro ao adicionar um item mais de uma vez', () => {
    const order = new Order('574.019.700-74');
    const volumnHelment = new ProductVolumn(32, 18, 21);
    const helmet = new Product('123', 'Capacete', 500, volumnHelment, 5);
    order.addItem(helmet, 1);
    expect(
        () => order.addItem(helmet, 1)
    ).toThrow(new Error('Este item já foi adicionado'));
    expect(order.getItems().length).toBe(1);
    expect(order.getTotal()).toBe(500);
});

test('Deve adicionar três itens no pedido e calcular o valor do frete', () => {
    const order = new Order('574.019.700-74');
    const volumnHelment = new ProductVolumn(32, 18, 21);
    const helmet = new Product('123', 'Capacete', 500, volumnHelment, 5);
    const volumnIcecream = new ProductVolumn(5, 2, 8);
    const iceCream = new Product('456', 'Sorvete', 14, volumnIcecream, 1);
    const volumnCoal = new ProductVolumn(100, 75, 92);
    const coal = new Product('789', 'Carvão', 22, volumnCoal, 10);
    order.addItem(helmet, 1);
    order.addItem(iceCream, 2);
    order.addItem(coal, 3);
    expect(order.calculateFreight()).toBe('R$156,56');
});

test('Deve adicionar um item no pedido e calcular o valor mínimo do frete', () => {
    const order = new Order('574.019.700-74');
    const volumnHelment = new ProductVolumn(2, 2, 2);
    const helmet = new Product('123', 'Capacete', 500, volumnHelment, 1);
    order.addItem(helmet, 1);
    expect(order.calculateFreight()).toBe('R$10,00');
});
