
export default class Cpf {
  private cpf: string;

  constructor (cpf: string) {
    this.cpf = cpf;
  }

  validate(): boolean {
    const cpf = this.normalize();
    if (cpf.length !== 11) return false;
    if (this.allDigitsAreEquals(cpf)) return false;
    let validateDigit = this.calculateDigit(cpf, 10);
    if (!this.isDigitValid(validateDigit, parseInt(cpf[9]))) return false;
    validateDigit = this.calculateDigit(cpf, 11);
    if (!this.isDigitValid(validateDigit, parseInt(cpf[10]))) return false;
    return true;
  }

  private normalize(): string {
    return this.cpf.replace(/\D+/g, '');
  }

  private allDigitsAreEquals(cpf: string): boolean {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
  }

  private calculateDigit(cpf: string, factor: number) {
    let control = factor;
    let soma = 0;

    for (let digit of cpf) {
      if (control > 1) {
        soma += parseInt(digit) * control;
        control--;
      }
    }

    return soma;
  }

  private isDigitValid(sum: number, digit: number) {
    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest === digit) return true;
    return false;
  }


  getValue(): string {
    return this.cpf;
  }
}
