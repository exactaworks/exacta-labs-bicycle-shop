import ProductsController from '../controllers/Products.js';

class Home {
  constructor() {
    this.productsController = new ProductsController();
  }
}

const home = new Home();

export default home;
