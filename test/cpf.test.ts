import { validate } from "../src/cpf";

test('Deve retornar que o CPF é válido', function() {
    const validateCpf = validate('596.637.610-75');
    expect(validateCpf).toBeTruthy();
});

test('Deve retornar que o CPF é inválido', function() {
    const validateCpf = validate('647.999.250-44');
    expect(validateCpf).toBeFalsy();
});

test('Deve validar sem o envio do CPF', function() {
    const validateCpf = validate('');
    expect(validateCpf).toBeFalsy();
});

test('Deve validar CPF com números iguais', function() {
    const validateCpf = validate('111.111.111.-11');
    expect(validateCpf).toBeFalsy();
});

test('Deve validar CPF com quantidade de caracteres diferente de 11', function() {
    const validateCpf = validate('350.954.524-554');
    expect(validateCpf).toBeFalsy();
});

test('Deve validar CPF com final zero', function() {
    const validateCpf = validate('647.999.250-40');
    expect(validateCpf).toBeFalsy();
});
