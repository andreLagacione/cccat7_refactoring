import ProductVolumn from "./ProductVolumn";

export default class Product {
    constructor (readonly id: string, readonly description: string, readonly price: number, readonly volumn: ProductVolumn, readonly weight: number) {
        if (!this.validateWeight(weight)) throw new Error('O peso informado é invalido');
    }

    validateWeight(weight: number): boolean {
        return weight > 0;
    }

    getDensity(): number {
        const volumn = this.volumn.getVolumn();
        if (volumn === 0) return 0;
        return Math.floor(this.weight / volumn);
    }
}