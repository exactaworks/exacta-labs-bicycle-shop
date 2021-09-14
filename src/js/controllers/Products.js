import ProductsView from '../views/Products.js';
import ProductsModel from '../models/Products.js';
import { getProducts } from '../services/products.js';
import { setListener, dispatchCustomEvent } from '../utils/dom.js';
import { debounce } from '../utils/debounce.js';

export default class ProductsController {
  constructor() {
    this.productsView = new ProductsView('#product-list');
    this.productsModel = new ProductsModel();

    this.init();
  }

  init() {
    this.initialRender();

    this.setListeners();
  }

  async initialRender() {
    const products = await getProducts();

    this.productsView.render(products);
  }

  setListeners() {
    setListener('#search-field', 'input', this.handleSearchFilter.bind(this));
    setListener('#category-field', 'change', this.handleCategoryFilter.bind(this));
    setListener('#sort-field', 'change', this.handleSort.bind(this));
    setListener('#product-list', 'click', this.handleAddProduct.bind(this));
  }

  handleAddProduct({ target }) {
    const productId = target.getAttribute('data-product-id');

    if (productId) {
      dispatchCustomEvent('cart:add', { productId });
    }
  }

  handleSearchFilter({ target }) {
    const search = target.value.trim();
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 2) {
      this.applyFilters({ search });
    }
  }

  handleCategoryFilter({ target }) {
    this.applyFilters({ category: target.value });
  }

  handleSort({ target }) {
    this.applyFilters({ sortCriteria: target.value });
  }

  async applyFilters({
    search = this.productsModel.filters.search,
    category = this.productsModel.filters.category,
    sortCriteria = this.productsModel.filters.sortCriteria,
  }) {
    this.productsModel.filters = {
      search,
      category,
      sortCriteria,
    };

    const filters = this.productsModel.buildFilters();
    const products = await getProducts(filters);

    this.productsView.render(products);
  }
}
