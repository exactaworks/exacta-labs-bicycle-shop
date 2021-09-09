import CartModel from '../models/Cart.js';
import CartView from '../views/Cart.js';
import { setCustomListener } from '../utils/dom.js';

export default class CartController {
  constructor(cartModel = new CartModel()) {
    this.cartModel = cartModel;
    this.cartView = new CartView('#cart');

    this.init();
  }

  init() {
    this.initialRender();

    this.setListeners();
  }

  setListeners() {
    this.setAddProductListener();
    this.setIncrementProductListener();
    this.setDecrementProductListener();
    this.setRemoveProductListener();
    this.setClearListener();
  }

  initialRender() {
    this.cartView.render(this.cartModel.amount);
  }

  setAddProductListener() {
    setCustomListener('cart:add', this.handleAddProduct.bind(this));
  }

  handleAddProduct(event) {
    this.updateCart(event, 'add');
  }

  setIncrementProductListener() {
    setCustomListener('cart:increment', this.handleIncrementProduct.bind(this));
  }

  handleIncrementProduct(event) {
    this.updateCart(event, 'increment');
  }

  setDecrementProductListener() {
    setCustomListener('cart:decrement', this.handleDecrementProduct.bind(this));
  }

  handleDecrementProduct(event) {
    this.updateCart(event, 'decrement');
  }

  setRemoveProductListener() {
    setCustomListener('cart:remove', this.handleRemoveProduct.bind(this));
  }

  handleRemoveProduct(event) {
    this.updateCart(event, 'remove');
  }

  setClearListener() {
    setCustomListener('cart:clear', this.handleClear.bind(this));
  }

  handleClear() {
    this.cartModel.clear();
    this.cartView.render();
  }

  updateCart(event, action) {
    const { productId } = event.detail;

    if (productId) {
      this.cartModel[action](productId);
      this.cartView.render(this.cartModel.amount);
    }
  }
}
