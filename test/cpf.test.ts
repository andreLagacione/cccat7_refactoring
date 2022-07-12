import Cpf from "../src/cpf";

test('Deve testar um CPF e retornar que o CPF é válido', () => {
    const cpf = new Cpf('925.454.250-44');
    expect(cpf.getValue()).toBe('925.454.250-44');
});

test('Deve testar um CPF e retornar que o CPF é inválido', () => {
    expect(
        () => new Cpf('925.454.250-45')
    ).toThrow(new Error('CPF inválido'));
});

test('Deve testar um CPF com o segundo digito inválido e retornar que o CPF é inválido', () => {
    expect(
        () => new Cpf('925.454.250-75')
    ).toThrow(new Error('CPF inválido'));
});

test('Deve testar um CPF que começa com zero e retornar que o CPF é válido', () => {
    const cpf = new Cpf('088.703.860-31');
    expect(cpf.getValue()).toBe('088.703.860-31');
});

test('Deve testar um CPF com quantidade de caractéteres inválida e retornar que o CPF é inválido', () => {
    expect(
        () => new Cpf('088.703.860-3')
    ).toThrow(new Error('CPF inválido'));
});

const defaultCpfs = [
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33',
    '444.444.444-44',
    '555.555.555-55',
    '666.666.666-66',
    '777.777.777-77',
    '888.888.888-88',
    '999.999.999-99',
];

test.each(defaultCpfs)('Deve testar um CPFs com todos caractéres iguais e retornar que o CPF é inválido', (value: string) => {
    expect(
        () => new Cpf(value)
    ).toThrow(new Error('CPF inválido'));
});

test('Deve testar o resto da divisão da validação do dígito', () => {
    const cpf = new Cpf('123.456.789-09');
    expect(cpf.getValue()).toBe('123.456.789-09');
});
