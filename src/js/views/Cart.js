import View from './View.js';

export default class CartView extends View {
  template(amount = 0) {
    if (!amount) {
      return `
        <button
          class="cart__button"
          title="Nenhum produto adicionado"
          type="button"
          disabled
        >
          Carrinho de compras
        </button>
      `;
    }

    return `
      <button
        class="cart__button cart__button--has-products"
        title="${amount} produto(s) adicionado(s)"
        data-cart-amount="${amount}"
        type="button"
      >
        Carrinho de compras
      </button>
    `;
  }
}
