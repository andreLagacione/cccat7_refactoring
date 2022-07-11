export default class ProductVolumn {
    private readonly ONE_CUBIC_METER = 1000000;

    constructor (readonly height: number, readonly width: number, readonly lenght: number) {
        if (!this.validateDimensions(height, width, lenght)) throw new Error('As dimenssões informadas são inválidas');
    }

    validateDimensions(height: number, width: number, lenght: number) {
        return height > 0 && width > 0 && lenght > 0;
    }

    getVolumn(): number {
        return (this.height * this.width * this.lenght) / this.ONE_CUBIC_METER;
    }
}