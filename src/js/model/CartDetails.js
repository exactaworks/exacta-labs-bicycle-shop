import { CART_STORAGE_KEY } from '../constants.js';
import { setStorageItem, getStorageItem } from '../utils/storage.js';

export default class CartDetailsModel {
  products = getStorageItem(CART_STORAGE_KEY) || [];

  increment(productId) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );

    this.products[productIndex].amount += 1;

    setStorageItem(CART_STORAGE_KEY, this.products);
  }

  decrement(productId) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );

    this.products[productIndex].amount -= 1;

    setStorageItem(CART_STORAGE_KEY, this.products);

    if (this.products[productIndex].amount === 0) {
      this.remove(this.products[productIndex].id);
    }
  }

  remove(productId) {
    this.products = this.products.filter((product) => product.id !== productId);

    setStorageItem(CART_STORAGE_KEY, this.products);
  }
}
