import PreviewOrder from "../../../application/PreviewOrder";
import ItemRepositoryDatabase from "../../repository/database/ItemRepositoryDatabase";
import Connection from '../../database/Connection';
import Http from "../../http/Http";

export default class OrderController {

    constructor (readonly http: Http, readonly connection: Connection) {
        http.on('post', '/orderPreview', function(params: any, body: any) {
            const itemRepository = new ItemRepositoryDatabase(connection);
            // aplication/use cases (Clean Architecture)
            const previewOrder = new PreviewOrder(itemRepository);
            const output = previewOrder.execute(body);
            return output;
        });
    }

}