import OrderItem from "../src/OrderItem";
import Product from "../src/Product";
import ProductVolumn from "../src/ProductVolumn";

test('deve criar um item do pedido', () => {
    const volumn = new ProductVolumn(32, 18, 21);
    const product =  new Product('123', 'Capacete', 500, volumn, 5);
    const orderItem = new OrderItem(product, 1);
    expect(orderItem.product.description).toBe('Capacete');
    expect(orderItem.quantity).toBe(1);
});

test('deve calcular o total do item', () => {
    const volumn = new ProductVolumn(32, 18, 21);
    const product =  new Product('123', 'Capacete', 500, volumn, 5);
    const orderItem = new OrderItem(product, 1);
    expect(orderItem.getTotal()).toBe(500);
});

test('deve retornar erro ao adicionar uma quantidade negativa', () => {
    const volumn = new ProductVolumn(32, 18, 21);
    const product =  new Product('123', 'Capacete', 500, volumn, 5);
    expect(
        () => new OrderItem(product, -1)
    ).toThrow(new Error('A quantidade deve ser maior ou igual a 1'));
});
