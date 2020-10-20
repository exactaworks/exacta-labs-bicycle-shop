import CartModel from '../models/Cart.js';
import ProductsController from '../controllers/Products.js';
import CartController from '../controllers/Cart.js';

class Home {
  constructor() {
    const cartModel = new CartModel();

    this.productsController = new ProductsController();
    this.cartController = new CartController(cartModel);
  }
}

export default new Home();
