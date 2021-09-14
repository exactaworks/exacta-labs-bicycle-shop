import CartDetailsView from '../views/CartDetails.js';
import { getProduct } from '../services/products.js';
import { setListener, dispatchCustomEvent, getTarget } from '../utils/dom.js';

export default class CartDetailsController {
  constructor(cartModel) {
    this.cartModel = cartModel;
    this.cartDetailsView = new CartDetailsView('#cart-details');

    this.init();
  }

  init() {
    this.initialRender();

    this.setListeners();
  }

  async initialRender() {
    const productsPromises = this.cartModel.products.map(async (item) => {
      const product = await getProduct(item.id);

      return {
        ...product,
        amount: item.amount,
      }
    });

    this.cartModel.products = await Promise.all(productsPromises);
    this.cartDetailsView.render(this.cartModel.products);
  }

  setListeners() {
    this.setIncrementProductListener();
    this.setDecrementProductListener();
    this.setRemoveProductListener();
  }

  setIncrementProductListener() {
    setListener(
      '#cart-details',
      'click',
      this.handleIncrementProduct.bind(this)
    )
  }

  handleIncrementProduct(event) {
    const target = getTarget(event.target, '[data-cart-increment]');

    this.updateCartDetails(target, 'cart:increment');
  }

  setDecrementProductListener() {
    setListener(
      '#cart-details',
      'click',
      this.handleDecrementProduct.bind(this)
    )
  }

  handleDecrementProduct(event) {
    const target = getTarget(event.target, '[data-cart-decrement]');

    this.updateCartDetails(target, 'cart:decrement');
  }

  setRemoveProductListener() {
    setListener(
      '#cart-details',
      'click',
      this.handleRemoveProduct.bind(this)
    )
  }

  handleRemoveProduct(event) {
    const target = getTarget(event.target, '[data-cart-remove]');

    this.updateCartDetails(target, 'cart:remove');
  }

  updateCartDetails(target, event) {
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
