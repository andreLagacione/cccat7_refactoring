import Product from "../src/Product";
import ProductVolumn from "../src/ProductVolumn";

test('deve criar um produto', () => {
    const productVolumn = new ProductVolumn(10, 20, 30);
    const product = new Product('123', 'Fogão', 752, productVolumn, 52);
    expect(product.description).toBe('Fogão');
    expect(product.price).toBe(752);
});

test('deve retornar erro ao informar o peso negativo', () => {
    const productVolumn = new ProductVolumn(10, 20, 30);
    expect(
        () => new Product('123', 'Fogão', 752, productVolumn, -52)
    ).toThrow(new Error('O peso informado é invalido'));
});

test('deve retornar a densidade do produto', () => {
    const productVolumn = new ProductVolumn(10, 20, 30);
    const product = new Product('123', 'Fogão', 752, productVolumn, 52);
    expect(product.getDensity()).toBe(8666);
});
