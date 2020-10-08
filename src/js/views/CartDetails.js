import View from './View.js';
import { formatToBRL } from '../utils/currency.js';

export default class CartDetailsView extends View {
  template(products = []) {
    if (!products.length) {
      return `<p>Nenhum produto adicionado no carrinho</p>`;
    }

    return `
      <table class="table">
        <thead>
          <tr>
            <th class="text-align--left">Produto</th>
            <th>Qtd</th>
            <th class="text-align--right">Preço</th>
          </tr>
        </thead>

        <tbody>
          ${products.reduce((accumulator, { id, name, price, amount }) => {
            return `
              ${accumulator}
              <tr>
                <td class="text-align--left">${name}</td>
                <td class="text-align--center">
                  <div class="flex--middle">
                    <button
                      class="button button--transparent margin--horizontal-1"
                      aria-label="Remover 1"
                      data-product-id="${id}"
                      data-cart-decrement
                    >
                      <img
                        class="icon"
                        src="./assets/images/remove.svg"
                        alt="-"
                      />
                    </button>

                    <span aria-label="Quantidade do produto">${amount}</span>

                    <button
                      class="button button--transparent margin--horizontal-1"
                      aria-label="Adicionar 1"
                      data-product-id="${id}"
                      data-cart-increment
                    >
                      <img class="icon" src="./assets/images/add.svg" alt="+" />
                    </button>
                  </div>
                </td>
                <td class="text-align--right">${formatToBRL(price)}</td>
                <td class="text-align--right">
                  <button
                    class="button button--transparent"
                    aria-label="Remover do carrinho"
                    data-product-id="${id}"
                    data-cart-remove
                  >
                    <img src="./assets/images/trash.svg" alt="Ícone remover" />
                  </button>
                </td>
              </tr>
            `;
          }, '')}
        </tbody>

        <tfoot>
          <tr>
            <td class="text-align--right font-weight--bold" colspan="3">
              Total ${formatToBRL(
                products.reduce(
                  (accumulator, { price, amount }) =>
                    accumulator + price * amount,
                  0
                )
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  }
}
