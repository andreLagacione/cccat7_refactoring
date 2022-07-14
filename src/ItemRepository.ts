import Item from "./Item";

export default interface ItemRepository {
    getitem(idItem: number): Promise<Item>;
}