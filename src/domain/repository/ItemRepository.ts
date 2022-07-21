import Item from "../entities/Item";

export default interface ItemRepository {
    getitem(idItem: number): Promise<Item>;
}