import { getProducts } from '../../mocks/product.js';
import { formatToBRL } from '../../utils/currency.js';
import { setListener } from '../../utils/dom.js';

class Main {
  constructor() {
    this.products = [];
    this.renderElement = this.getRenderElement();
    this.filters = {
      search: '',
      sortCriteria: 'asc',
      category: 'all',
    };

    this.init();
  }

  init() {
    this.initialRender();

    this.setSearchFieldListener();
    this.setCategoryFieldListener();
    this.setSortFieldListener();
  }

  async initialRender() {
    this.products = await getProducts();

    this.render(this.products);
  }

  setSearchFieldListener() {
    setListener('#search-field', 'keyup', this.handleSearchFilter.bind(this));
  }

  handleSearchFilter(search) {
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 1) {
      this.filters.search = search;

      this.applyFilters();
    }
  }

  filterBySearch(products) {
    if (this.filters.search === '') {
      return products;
    }

    return products.filter(({ name }) =>
      name.toLowerCase().includes(this.filters.search.toLowerCase())
    );
  }

  setCategoryFieldListener() {
    setListener(
      '#category-field',
      'change',
      this.handleCategoryFilter.bind(this)
    );
  }

  handleCategoryFilter(category) {
    this.filters.category = category;

    this.applyFilters();
  }

  filterByCategory(products) {
    if (this.filters.category === 'all') {
      return products;
    }

    return products.filter(
      ({ category }) => category === this.filters.category
    );
  }

  setSortFieldListener() {
    setListener('#sort-field', 'change', this.handleSort.bind(this));
  }

  handleSort(sortCriteria) {
    this.filters.sortCriteria = sortCriteria;

    this.applyFilters();
  }

  sortByPrice(products) {
    let sortedProducts = [...products];

    if (this.filters.sortCriteria === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  }

  applyFilters() {
    const products = [...this.products];
    const productsByCategory = this.filterByCategory(products);
    const productsBySearch = this.filterBySearch(productsByCategory);
    const sortedProducts = this.sortByPrice(productsBySearch);

    this.render(sortedProducts);
  }

  getRenderElement() {
    return document.querySelector('#product-list');
  }

  render(products = []) {
    let renderContent = `
      <p>Nenhum resultado obtido com a busca.</p>
    `;

    if (products.length) {
      renderContent = products.reduce((accumulator, product) => {
        return `
          ${accumulator}
          <li class="card">
            <img
              class="card__image"
              src="./assets/images/products/${product.image}"
              alt="Imagem do produto ${product.name}"
            />

            <div class="card__info">
              <p class="card__info__text font--bold">
                ${product.name}

                <span class="font--size-1 display--block">
                  ${formatToBRL(product.price)}
                </span>
              </p>

              <button class="button" data-product-id="${product.id}">
                Adicionar ao carrinho
              </button>
            </div>
          </li>
        `;
      }, '');
    }

    this.renderElement.innerHTML = renderContent;
  }
}

const main = new Main();
