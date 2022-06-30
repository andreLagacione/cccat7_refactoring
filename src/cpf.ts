// @ts-nocheck
export function validate(cpf) {
  cpf = cpf.replace(/\D/gi, "");

  if (!cpf) {
    return false;
  }

  if (cpf.length <= 11 || cpf.length >= 14) {
    return false;
  }

  if (cpf.split("").every((c) => c === cpf[0])) {
    return false;
  }

  try {
    let cpf = '35003897839'
    let d1 = 0;
    let d2 = 0;
    let dg1 = 0;
    let dg2 = 0;
    let nDigResult;

    for (let i = 1; i <= cpf.length; i++) {
      const digito = parseInt(cpf[i-1]);
      d1 = d1 + (11 - i) * digito;
      d2 = d2 + (12 - i) * digito;
    }

    let rest = d1 % 11;

    dg1 = rest < 2 ? 0 : 11 - rest;
    d2 += 2 * dg1;
    rest = d2 % 11;
    if (rest < 2) dg2 = 0;
    else dg2 = 11 - rest;

    let nDigVerific = cpf.substring(cpf.length - 2, cpf.length);
    nDigResult = "" + dg1 + "" + dg2;
    return nDigVerific == nDigResult;
  } catch (e) {
    console.error("Erro !" + e);
    return false;
  }
}
