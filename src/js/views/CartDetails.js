import View from './View.js';
import { formatToBRL } from '../utils/currency.js';

export default class CartDetailsView extends View {
  template(products = []) {
    if (!products.length) {
      return `
        <p>Nenhum produto adicionado no carrinho</p>

        <div class="grid grid-auto-fill mt-1">
          <a class="button button--outlined" href="/">Voltar para os produtos</a>
        </div>
      `;
    }

    return `
      <table class="table">
        <thead>
          <tr>
            <th class="ta-left">Produto</th>
            <th>Qtd</th>
            <th class="ta-right">Preço</th>
          </tr>
        </thead>

        <tbody>
          ${products.reduce((accumulator, { id, name, price, amount }) => {
            return `
              ${accumulator}
              <tr>
                <td class="ta-left">${name}</td>
                <td class="ta-center">
                  <div class="flex-middle">
                    <button
                      class="button button--transparent mh-1"
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
                      class="button button--transparent mh-1"
                      aria-label="Adicionar 1"
                      data-product-id="${id}"
                      data-cart-increment
                    >
                      <img class="icon" src="./assets/images/add.svg" alt="+" />
                    </button>
                  </div>
                </td>
                <td class="ta-right">${formatToBRL(price)}</td>
                <td class="ta-right">
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
            <td class="ta-right fw-bold" colspan="3">
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

      <div class="grid grid-auto-fill mv-1">
        <a class="button button--outlined" href="/">Ver mais produtos</a>
        <a class="button button--primary" href="/order-form.html">Continuar a compra</a>
      </div>
    `;
  }
}
