import ProductVolumn from "./ProductVolumn";

export default class Product {
    constructor (readonly id: string, readonly description: string, readonly price: number, readonly volumn: ProductVolumn, readonly weight: number) {
        if (!this.validateWeight(weight)) throw new Error('O peso informado é invalido');
    }

    validateWeight(weight: number): boolean {
        return weight > 0;
    }

    getDensity(): number {
        return Math.floor(this.weight / this.volumn.getVolumn());
    }
}