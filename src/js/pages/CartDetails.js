import CartModel from '../models/Cart.js';
import CartController from '../controllers/Cart.js';
import CartDetailsController from '../controllers/CartDetails.js';

class CartDetails {
  constructor() {
    const cartModel = new CartModel();

    this.cartController = new CartController(cartModel);
    this.cartDetailsController = new CartDetailsController(cartModel);
  }
}

export default new CartDetails();
