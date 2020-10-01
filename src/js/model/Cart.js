import { CART_STORAGE_KEY } from '../contants.js';
import { setStorageItem, getStorageItem } from '../utils/storage.js';

export default class CartModel {
  products = [];

  addProduct(product) {
    this.products.push(product);

    setStorageItem(CART_STORAGE_KEY, this.products);
  }

  get amount() {
    return getStorageItem(CART_STORAGE_KEY).length;
  }
}
