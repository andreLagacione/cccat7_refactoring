import PreviewOrder from "../../../application/PreviewOrder";
import ItemRepositoryDatabase from "../../repository/database/ItemRepositoryDatabase";
import CLIManager from "../../cli/CLIManager";
import Connection from '../../database/Connection';

export default class CLIController {
    constructor(cliManager: CLIManager, readonly connection: Connection) {
        let cpf = '';
        let orderItems: { idItem: number, quantity: number }[] = [];

        cliManager.addCommand('cpf', function(params: string) {
            cpf = params;
        });

        cliManager.addCommand('add-item', function(params: string) {
            const [idItem, quantity] = params.split(' ');
            orderItems.push({ idItem: parseInt(idItem), quantity: parseInt(quantity) });
        });

        cliManager.addCommand('preview', async function() {
            const itemRepository = new ItemRepositoryDatabase(connection);
            const previewOrder = new PreviewOrder(itemRepository);
            const input = { cpf, orderItems };
            const output = await previewOrder.execute(input);
            return `total: ${output.total}`;
        });
    }
}
