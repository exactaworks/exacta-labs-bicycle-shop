import { products } from '../mocks/products.js';

export default class ProductsService {
  async getProducts() {
    return products;
  }

  async getProductById(id) {
    return products.find((product) => product.id === id);
  }
}
