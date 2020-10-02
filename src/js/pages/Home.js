import ProductsController from '../controllers/Products.js';
import CartController from '../controllers/Cart.js';

class Home {
  constructor() {
    this.productsController = new ProductsController();
    this.cartController = new CartController();
  }
}

export default new Home();
