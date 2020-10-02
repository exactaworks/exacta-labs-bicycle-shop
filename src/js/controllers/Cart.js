import CartModel from '../model/Cart.js';
import CartView from '../views/Cart.js';
import { setListener } from '../utils/dom.js';

export default class ProductsController {
  constructor() {
    this.cartModel = new CartModel();
    this.cartView = new CartView('#cart');

    this.init();
  }

  init() {
    this.initialRender();

    this.setAddProductListener();
  }

  initialRender() {
    this.cartView.render(this.cartModel.amount);
  }

  setAddProductListener() {
    setListener('#products', 'click', this.handleAddProduct.bind(this));
  }

  handleAddProduct(event) {
    const productId = event.target.getAttribute('data-product-id');

    if (productId) {
      this.cartModel.addProduct(productId);
      this.cartView.render(this.cartModel.amount);
    }
  }
}
