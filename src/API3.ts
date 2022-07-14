import ExpressAdapter from './ExpressAdapter';
import OrderController from './OrderController';

// framework and driver (clean architectrue)
const http = new ExpressAdapter();

// interface Adapter (clean architecture)
const router = new OrderController(http);
http.listen(3000);