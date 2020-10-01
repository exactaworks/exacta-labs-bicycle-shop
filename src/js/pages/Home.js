import ProductsController from '../controllers/Products.js';

class Home {
  constructor() {
    this.productsController = new ProductsController();
  }
}

export default new Home();
