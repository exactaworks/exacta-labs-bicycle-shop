import ProductsView from '../views/Products.js';
import ProductsModel from '../model/Products.js';
import ProductsService from '../services/products.js';
import { setListener, dispatchCustomEvent } from '../utils/dom.js';
import { CUSTOM_EVENTS } from '../constants.js';

export default class ProductsController {
  constructor() {
    this.productsView = new ProductsView('#products');
    this.productsModel = new ProductsModel();
    this.productsService = new ProductsService();

    this.init();
  }

  init() {
    this.initialRender();

    this.setSearchFieldListener();
    this.setCategoryFieldListener();
    this.setSortFieldListener();
    this.setAddProductListener();
  }

  async initialRender() {
    const products = await this.productsService.getProducts();

    this.productsModel.products = products;
    this.productsView.render(products);
  }

  setSearchFieldListener() {
    setListener('#search-field', 'input', this.handleSearchFilter.bind(this));
  }

  handleSearchFilter(event) {
    const search = event.target.value.trim();
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 1) {
      this.applyFilters({ search });
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
    this.applyFilters({ category: event.target.value });
  }

  setSortFieldListener() {
    setListener('#sort-field', 'change', this.handleSort.bind(this));
  }

  handleSort(event) {
    this.applyFilters({ sortCriteria: event.target.value });
  }

  applyFilters({
    search = this.productsModel.filters.search,
    sortCriteria = this.productsModel.filters.sortCriteria,
    category = this.productsModel.filters.category,
  } = {}) {
    this.productsModel.filters = {
      search,
      sortCriteria,
      category,
    };

    const products = this.productsModel.applyFilters();

    this.productsView.render(products);
  }

  setAddProductListener() {
    setListener('#products', 'click', this.handleAddProduct.bind(this));
  }

  handleAddProduct(event) {
    const productId = event.target.getAttribute('data-product-id');

    if (productId) {
      dispatchCustomEvent(CUSTOM_EVENTS.CART_ADD, { productId });
    }
  }
}
