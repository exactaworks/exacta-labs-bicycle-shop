import View from './View.js';
import { formatToBRL } from '../utils/currency.js';

export default class ProductsView extends View {
  template(products) {
    return products.reduce((accumulator, { id, name, image, price }) => {
      return `
        ${accumulator}
        <li class="card">
          <img
            class="card__image"
            src="${image}"
            alt="Imagem do produto ${name}"
          />

          <div class="card__info">
            <p class="card__text fw-bold">
              ${name}

              <span class="fs-1 block">
                ${formatToBRL(price)}
              </span>
            </p>

            <button class="button button--full-width" data-product-id="${id}">
              Adicionar ao carrinho
            </button>
          </div>
        </li>
      `;
    }, '');
  }
}
