import FreightCalculator from "../domain/entities/FreightCalculator";
import ItemRepository from "../domain/repository/ItemRepository";

export default class SimulateFreight {
    constructor (readonly itemRespository: ItemRepository) {}

    async execute (input: Input): Promise<Output> {
        let total = 0;
        for (const orderItem of input.orderItems) {
            const item = await this.itemRespository.getitem(orderItem.iditem);
            total += FreightCalculator.calculate(item) * orderItem.quantity;
        }
        return { total };
    }
}

type Input = {
    orderItems: {
        iditem: number,
        quantity: number
    }[]
}

type Output = {
    total: number;
}
