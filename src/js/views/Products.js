import View from './View.js';
import { formatToBRL } from '../utils/currency.js';

export default class ProductsView extends View {
  template(products = []) {
    if (!products.length) {
      return '<p>Nenhum resultado obtido com a busca.</p>';
    }

    return products.reduce((accumulator, { id, image, name, price }) => {
      return `
          ${accumulator}
          <li class="card">
            <img
              class="card__image"
              src="./assets/images/products/${image}"
              alt="Imagem do produto ${name}"
            />

            <div class="card__info">
              <p class="card__info__text font-weight--bold">
                ${name}

                <span class="font--size-1 display--block">
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
