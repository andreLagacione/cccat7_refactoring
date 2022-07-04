// @ts-nocheck
export function validate(cpf) {
  if (!cpf) {
    return false;
  }

  cpf = cpf.replace(/\D/gi, "");

  if (cpf.length !== 11) {
    return false;
  }

  if (cpf.split("").every((c) => c === cpf[0])) {
    return false;
  }

  let soma = 0;
  let digitoVerificador = parseInt(cpf[9]);

  for (let i = 1; i < 10; i++) {
    const digitoCpf = parseInt(cpf[i - 1]);
    soma = soma + (digitoCpf * (11 - i));
  }

  if (!validarDigitoVerificador(soma, digitoVerificador)) {
    return false;
  }

  soma = 0;

  for (let i = 1; i < 11; i++) {
    const digitoCpf = parseInt(cpf[i - 1]);
    soma = soma + (digitoCpf * (12 - i));
  }

  digitoVerificador = parseInt(cpf[10]);

  if (!validarDigitoVerificador(soma, digitoVerificador)) {
    return false;
  }

  return true;
}

function validarDigitoVerificador(soma, digito) {
  let resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto === digito) {
    return true;
  }

  return false;
}
