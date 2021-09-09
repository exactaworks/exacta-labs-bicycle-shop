import OrderFormController from '../controllers/OrderForm.js';
import CartController from '../controllers/Cart.js';

class OrderForm {
  constructor() {
    this.orderFormController = new OrderFormController();
    this.cartController = new CartController();
  }
}

export default new OrderForm();
