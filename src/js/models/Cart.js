import { setStorageItem, getStorageItem, removeStorageItem } from '../utils/storage.js';
import { CART_STORAGE_KEY } from '../constants.js';

export default class CartModel {
  products = getStorageItem(CART_STORAGE_KEY) || [];

  #getProductIndex(productId) {
    return this.products.findIndex((item) => item.id === productId);
  }

  add(productId) {
    const productIndex = this.#getProductIndex(productId);

    if (productIndex === -1) {
      this.products.push({
        id: productId,
        amount: 1,
      });
    } else {
      this.products[productIndex].amount += 1;
    }

    setStorageItem(CART_STORAGE_KEY, this.products);
  }

  increment(productId) {
    const productIndex = this.#getProductIndex(productId);

    this.products[productIndex].amount += 1;

    setStorageItem(CART_STORAGE_KEY, this.products);
  }

  decrement(productId) {
    const productIndex = this.#getProductIndex(productId);

    this.products[productIndex].amount -= 1;

    if (this.products[productIndex].amount === 0) {
      this.remove(this.products[productIndex].id);

      return;
    }

    setStorageItem(CART_STORAGE_KEY, this.products);
  }

  remove(productId) {
    this.products = this.products.filter((product) => product.id !== productId);

    setStorageItem(CART_STORAGE_KEY, this.products);
  }

  clear() {
    this.products.length = 0;

    removeStorageItem(CART_STORAGE_KEY);
  }

  get amount() {
    return this.products.reduce((accumulator, product) => {
      return accumulator + product.amount;
    }, 0);
  }
}
