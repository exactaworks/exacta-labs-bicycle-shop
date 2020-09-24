import { products } from '../mocks/products.js';

export default class ProductsService {
  async getProducts() {
    return products;
  }
}
