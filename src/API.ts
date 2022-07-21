// main
import OrderController from "./infra/controller/http/OrderController";
import PgPromiseAdpter from "./infra/database/PgPromiseAdapter";
import ExpressAdapter from "./infra/http/ExpressAdapter";


// Frameworks and Drivers
const http = new ExpressAdapter();
const connection = new PgPromiseAdpter();

// Interface Adapters
new OrderController(http, connection);
http.listen(3000);