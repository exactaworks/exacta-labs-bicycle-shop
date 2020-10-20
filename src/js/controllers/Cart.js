import CartModel from '../models/Cart.js';
import CartView from '../views/Cart.js';
import { setCustomListener } from '../utils/dom.js';
import { CUSTOM_EVENTS } from '../constants.js';

export default class ProductsController {
  constructor(cartModel = new CartModel()) {
    this.cartModel = cartModel;
    this.cartView = new CartView('#cart');

    this.init();
  }

  init() {
    this.initialRender();

    this.setAddProductListener();
    this.setIncrementProductListener();
    this.setDecrementProductListener();
    this.setRemoveProductListener();
  }

  initialRender() {
    this.cartView.render(this.cartModel.amount);
  }

  setAddProductListener() {
    setCustomListener(CUSTOM_EVENTS.CART_ADD, this.handleAddProduct.bind(this));
  }

  handleAddProduct(event) {
    this.updateCart(event, 'add');
  }

  setIncrementProductListener() {
    setCustomListener(
      CUSTOM_EVENTS.CART_INCREMENT,
      this.handleIncrementProduct.bind(this)
    );
  }

  handleIncrementProduct(event) {
    this.updateCart(event, 'increment');
  }

  setDecrementProductListener() {
    setCustomListener(
      CUSTOM_EVENTS.CART_DECREMENT,
      this.handleDecrementProduct.bind(this)
    );
  }

  handleDecrementProduct(event) {
    this.updateCart(event, 'decrement');
  }

  setRemoveProductListener() {
    setCustomListener(
      CUSTOM_EVENTS.CART_REMOVE,
      this.handleRemoveProduct.bind(this)
    );
  }

  handleRemoveProduct(event) {
    this.updateCart(event, 'remove');
  }

  updateCart(event, action) {
    const { productId } = event.detail;

    if (productId) {
      this.cartModel[action](productId);
      this.cartView.render(this.cartModel.amount);
    }
  }
}
