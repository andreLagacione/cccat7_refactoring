import Item from "../../../domain/entities/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";
import Dimension from "../../../domain/entities/Dimension";

export default class ItemRepositoryMemory implements ItemRepository {
   items: Item[] = [];

   // DIP - Dependency Inversion Principle
   constructor() {
      this.items = [
         new Item(1, 'Guitarra', 1000, new Dimension(100, 30, 10, 3)),
         new Item(2, 'Amplificador', 5000, new Dimension(50, 50, 50, 20)),
         new Item(3, 'Cabo', 30, new Dimension(10, 10, 10, 1)),
      ]
   }

   async getitem(idItem: number): Promise<Item> {
        const item = this.items.find(item => item.idItem === idItem);
        if (!item) throw new Error('Item not found');
        return item;
   }
}