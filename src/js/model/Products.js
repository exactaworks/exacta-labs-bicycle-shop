export default class ProductsModel {
  products = [];
  filters = {
    search: '',
    sortCriteria: 'asc',
    category: 'all',
  };

  set products(products) {
    this.products = [...products];
  }

  filterBySearch(product) {
    if (this.filters.search === '') {
      return true;
    }

    return product.name
      .toLowerCase()
      .includes(this.filters.search.toLowerCase());
  }

  filterByCategory(product) {
    if (this.filters.category === 'all') {
      return true;
    }

    return product.category === this.filters.category;
  }

  sortByPrice(a, b) {
    if (this.filters.sortCriteria === 'asc') {
      return a.price - b.price;
    }

    return b.price - a.price;
  }

  applyFilters() {
    return this.products
      .filter(this.filterByCategory.bind(this))
      .filter(this.filterBySearch.bind(this))
      .sort(this.sortByPrice.bind(this));
  }
}
