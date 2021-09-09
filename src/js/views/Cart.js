import View from './View.js';

export default class CartView extends View {
  template(amount) {
    if (amount) {
      return `
        <a href="cart.html" class="cart__button cart__button--has-products" data-cart-amount="${amount}">
          Carrinho de compras
        </a>
      `;
    }

    return `
      <a href="cart.html" class="cart__button">
        Carrinho de compras
      </a>
    `;
  }
}
