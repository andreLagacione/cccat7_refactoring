import Order from "./Order";

export default interface OrderRespository {
    save (order: Order): Promise<void>;
}