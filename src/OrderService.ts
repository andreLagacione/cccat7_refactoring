import Order from "./Order";
import ItemRepository from "./ItemRepository";
import OrderRespository from "./OrderRepository";

export default class OrderService {
  // Porta secundária (Driven)
  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository?: OrderRespository
  ) {}

  // Porta primária (Driver)
  async preview(input: Input): Promise<Output> {
    // Entity (Clean Architecture)
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
        const item = await this.itemRepository.getitem(orderItem.idItem);
        order.addItem(item, orderItem.quantity);
    }
    const total = order.getTotal();
    return { total };
  }

  async checkout(input: Input): Promise<void> {
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
        const item = await this.itemRepository.getitem(orderItem.idItem);
        order.addItem(item, orderItem.quantity);
    }
  }

}

type Input = {
    cpf: string,
    orderItems: { idItem: number, quantity: number }[];
}

type Output = {
    total: number;
}
