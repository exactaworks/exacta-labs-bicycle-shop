import CartModel from '../models/Cart.js';
import OrderFormModel from '../models/OrderForm.js';
import OrderFormView from '../views/OrderForm.js';
import { getProduct } from '../services/products.js';
import { sendOrder } from '../services/order.js';
import { getFieldsValues, isInvalid } from '../utils/form.js';
import {
  setListener,
  scrollTo,
  dispatchCustomEvent,
  replaceLocation
} from '../utils/dom.js';

export default class OrderFormController {
  constructor() {
    this.cartModel = new CartModel();
    this.orderFormModel = new OrderFormModel();
    this.orderFormView = new OrderFormView('#order-form');

    this.init();
  }

  init() {
    if (!this.cartModel.products.length) {
      replaceLocation('/');

      return;
    }

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
    this.orderFormView.render({
      products: this.cartModel.products,
      paymentMethod: this.orderFormModel.paymentMethod,
    });
  }

  setListeners() {
    this.setFieldsMasksListener();
    this.setPaymentMethodListener();
    this.setSubmitListener();
  }

  setFieldsMasksListener() {
    setListener('#order-form', 'input', this.applyMask.bind(this));
  }

  applyMask({ target }) {
    const mask = target.dataset.mask;

    if (mask) {
      target.value = this.orderFormModel.fieldsMasks[mask](target.value);
    }
  }

  setPaymentMethodListener() {
    setListener('#order-form', 'click', this.handlePaymentMethod.bind(this));
  }

  handlePaymentMethod({ target }) {
    if (target.name !== 'paymentMethod') {
      return;
    }

    const cardInfoContainer = document.querySelector('#cardInfo');

    if (target.value === 'card') {
      cardInfoContainer.classList.remove('hide');
      this.orderFormModel.paymentMethod = 'card';

      return;
    }

    cardInfoContainer.classList.add('hide');
    this.orderFormModel.paymentMethod = 'bankSlip';

    return;
  }

  setSubmitListener() {
    setListener('#order-form', 'submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();

    const fieldsValues = getFieldsValues(event.target);
    const { paymentMethod } = this.orderFormModel;
    const fieldsValidations = {
      ...this.orderFormModel.fieldsValidations,
      ... paymentMethod === 'card' ? this.orderFormModel.cardFieldsValidations : {},
    };
    const { products } = this.cartModel;

    let orderStatus = 'incomplete';

    if (!isInvalid(fieldsValues, fieldsValidations)) {
      try {
        await sendOrder({
          ...fieldsValues,
          products,
        });

        orderStatus = 'succeded';
        dispatchCustomEvent('cart:clear');
      } catch (error) {
        console.error(error);

        orderStatus = 'error';
        scrollTo('#order-form');
      }
    }

    this.orderFormView.render({
      fieldsValues,
      fieldsValidations,
      paymentMethod,
      products,
      orderStatus,
    });
  }
}
