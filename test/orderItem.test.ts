import OrderItem from "../src/OrderItem";

test('deve calcular o total do item', () => {
    const orderItem = new OrderItem('123', 45, 3);
    expect(orderItem.getTotal()).toBe(135);
});
