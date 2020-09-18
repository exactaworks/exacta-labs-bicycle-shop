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

  handleSearchFilter(event) {
    const search = event.target.value.trim();
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 1) {
      this.filters.search = search;

      this.applyFilters();
    }
  }

  filterBySearch(product) {
    if (this.filters.search === '') {
      return true;
    }

    return product.name
      .toLowerCase()
      .includes(this.filters.search.toLowerCase());
  }

  setCategoryFieldListener() {
    setListener(
      '#category-field',
      'change',
      this.handleCategoryFilter.bind(this)
    );
  }

  handleCategoryFilter(event) {
    this.filters.category = event.target.value;

    this.applyFilters();
  }

  filterByCategory(product) {
    if (this.filters.category === 'all') {
      return true;
    }

    return product.category === this.filters.category;
  }

  setSortFieldListener() {
    setListener('#sort-field', 'change', this.handleSort.bind(this));
  }

  handleSort(event) {
    this.filters.sortCriteria = event.target.value;

    this.applyFilters();
  }

  sortByPrice(a, b) {
    if (this.filters.sortCriteria === 'asc') {
      return a.price - b.price;
    }

    return b.price - a.price;
  }

  applyFilters() {
    const products = [...this.products];
    const filteredProducts = products
      .filter(this.filterByCategory.bind(this))
      .filter(this.filterBySearch.bind(this))
      .sort(this.sortByPrice.bind(this));

    this.render(filteredProducts);
  }

  getRenderElement() {
    return document.querySelector('#product-list');
  }

  render(products = []) {
    if (!products.length) {
      return (this.renderElement.innerHTML = `
        <p>Nenhum resultado obtido com a busca.</p>
      `);
    }

    return (this.renderElement.innerHTML = products.reduce(
      (accumulator, product) => {
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
      },
      ''
    ));
  }
}

const main = new Main();
