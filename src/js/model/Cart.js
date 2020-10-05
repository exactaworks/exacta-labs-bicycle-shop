import { CART_STORAGE_KEY } from '../constants.js';
import { setStorageItem, getStorageItem } from '../utils/storage.js';

export default class CartModel {
  products = getStorageItem(CART_STORAGE_KEY) || [];

  addProduct(productId) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );

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

  get amount() {
    return this.products.reduce(
      (accumulator, product) => accumulator + product.amount,
      0
    );
  }
}
