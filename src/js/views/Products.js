import View from './View.js';
import { formatToBRL } from '../utils/currency.js';

export default class ProductsView extends View {
  template(products = []) {
    if (!products.length) {
      return '<p>Nenhum resultado obtido com a busca.</p>';
    }

    return products.reduce((accumulator, product) => {
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
}
