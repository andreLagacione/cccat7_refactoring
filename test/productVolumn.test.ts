import ProductVolumn from "../src/ProductVolumn";

test('Deve retornar o volume', () => {
    const productVolumn = new ProductVolumn(20, 15, 10);
    const volumn = productVolumn.getVolumn();
    expect(volumn).toBe(0.003);
});

test('Deve retornar erro ao informar uma dimenssão negativa', () => {
    expect(() => new ProductVolumn(20, 15, -10)).toThrow(new Error('As dimenssões informadas são inválidas'));
});
