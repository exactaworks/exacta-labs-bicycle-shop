import CartDetails from '../views/CartDetails.js';
import ProductsService from '../services/products.js';
import { setListener, getTarget, dispatchCustomEvent } from '../utils/dom.js';
import { CUSTOM_EVENTS } from '../constants.js';

export default class CartDetailsController {
  constructor(cartModel) {
    this.cartModel = cartModel;
    this.cartDetailsView = new CartDetails('#cart-details');
    this.productsService = new ProductsService();

    this.init();
  }

  init() {
    this.initialRender();

    this.setIncrementProductListener();
    this.setDecrementProductListener();
    this.setRemoveProductListener();
  }

  async initialRender() {
    const productsPromises = this.cartModel.products.map(async (item) => {
      const product = await this.productsService.getProductById(item.id);

      return {
        ...product,
        amount: item.amount,
      };
    });

    this.cartModel.products = await Promise.all(productsPromises);
    this.cartDetailsView.render(this.cartModel.products);
  }

  setIncrementProductListener() {
    setListener(
      '#cart-details',
      'click',
      this.handleIncrementProduct.bind(this)
    );
  }

  handleIncrementProduct(event) {
    const target = getTarget(event.target, '[data-cart-increment]');

    this.updateCartDetails(target, CUSTOM_EVENTS.CART_INCREMENT);
  }

  setDecrementProductListener() {
    setListener(
      '#cart-details',
      'click',
      this.handleDecrementProduct.bind(this)
    );
  }

  handleDecrementProduct(event) {
    const target = getTarget(event.target, '[data-cart-decrement]');

    this.updateCartDetails(target, CUSTOM_EVENTS.CART_DECREMENT);
  }

  setRemoveProductListener() {
    setListener('#cart-details', 'click', this.handleRemoveProduct.bind(this));
  }

  handleRemoveProduct(event) {
    const target = getTarget(event.target, '[data-cart-remove]');

    this.updateCartDetails(target, CUSTOM_EVENTS.CART_REMOVE);
  }

  async updateCartDetails(target, event) {
    if (!target) {
      return;
    }

    const productId = target.getAttribute('data-product-id');

    if (productId) {
      dispatchCustomEvent(event, { productId });
      this.cartDetailsView.render(this.cartModel.products);
    }
  }
}
