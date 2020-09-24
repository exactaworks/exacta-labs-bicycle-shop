import ProductsView from '../views/Products.js';
import ProductsModel from '../model/Products.js';
import ProductsService from '../services/products.js';
import { setListener } from '../utils/dom.js';

export default class ProductsController {
  constructor() {
    this.productsView = new ProductsView('#product-list');
    this.productsModel = new ProductsModel();
    this.productsService = new ProductsService();

    this.init();
  }

  init() {
    this.initialRender();

    this.setSearchFieldListener();
    this.setCategoryFieldListener();
    this.setSortFieldListener();
  }

  async initialRender() {
    const products = await this.productsService.getProducts();

    this.productsModel.products = products;
    this.productsView.render(products);
  }

  setSearchFieldListener() {
    setListener('#search-field', 'keyup', this.handleSearchFilter.bind(this));
  }

  handleSearchFilter(event) {
    const search = event.target.value.trim();
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 1) {
      this.productsModel.filters.search = search;

      this.applyFilters();
    }
  }

  setCategoryFieldListener() {
    setListener(
      '#category-field',
      'change',
      this.handleCategoryFilter.bind(this)
    );
  }

  handleCategoryFilter(event) {
    this.productsModel.filters.category = event.target.value;

    this.applyFilters();
  }

  setSortFieldListener() {
    setListener('#sort-field', 'change', this.handleSort.bind(this));
  }

  handleSort(event) {
    this.productsModel.filters.sortCriteria = event.target.value;

    this.applyFilters();
  }

  applyFilters() {
    const products = this.productsModel.applyFilters();

    this.productsView.render(products);
  }
}
