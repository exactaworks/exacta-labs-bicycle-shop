import CartDetailsModel from '../model/CartDetails.js';
import CartDetails from '../views/CartDetails.js';
import ProductsService from '../services/products.js';
import { setListener, getTarget } from '../utils/dom.js';

export default class CartDetailsController {
  constructor() {
    this.cartDetailsModel = new CartDetailsModel();
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
    const productsPromises = this.cartDetailsModel.products.map(
      async (item) => {
        const product = await this.productsService.getProductById(item.id);

        return {
          ...product,
          amount: item.amount,
        };
      }
    );

    this.cartDetailsModel.products = await Promise.all(productsPromises);
    this.cartDetailsView.render(this.cartDetailsModel.products);
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

    if (target) {
      const productId = target.getAttribute('data-product-id');

      this.cartDetailsModel.increment(productId);
      this.cartDetailsView.render(this.cartDetailsModel.products);
    }
  }

  setDecrementProductListener() {
    setListener(
      '#cart-details',
      'click',
      this.handleDecrementProduct.bind(this)
    );
  }

  handleDecrementProduct() {
    const target = getTarget(event.target, '[data-cart-decrement]');

    if (target) {
      const productId = target.getAttribute('data-product-id');

      this.cartDetailsModel.decrement(productId);
      this.cartDetailsView.render(this.cartDetailsModel.products);
    }
  }

  setRemoveProductListener() {
    setListener('#cart-details', 'click', this.handleRemoveProduct.bind(this));
  }

  handleRemoveProduct(event) {
    const target = getTarget(event.target, '[data-cart-remove]');

    if (target) {
      const productId = target.getAttribute('data-product-id');

      this.cartDetailsModel.remove(productId);
      this.cartDetailsView.render(this.cartDetailsModel.products);
    }
  }
}
