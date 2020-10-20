import View from './View.js';

export default class CartView extends View {
  template(amount = 0) {
    const icon = `
      <img
        class="icon icon--size-2"
        src="./assets/images/cart.svg"
        alt="Ícone do carrinho de compras"
      />
    `;

    if (!amount) {
      return `
        <a href="/cart.html"
          class="cart__button"
          title="Nenhum produto adicionado"
          aria-label="Carrinho de compras"
        >
          ${icon}
        </a>
      `;
    }

    return `
      <a href="/cart.html"
        class="cart__button cart__button--has-products"
        title="${amount} produto(s) adicionado(s)"
        data-cart-amount="${amount}"
        aria-label="Carrinho de compras"
      >
        ${icon}
      </a>
    `;
  }
}
