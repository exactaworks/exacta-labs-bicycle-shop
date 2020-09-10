import { getProducts } from '../../mocks/product.js';
import { formatToBRL } from '../../utils/currency.js';

async function init() {
  const products = await getProducts();
  const productsContainer = getContainer('#product-list');

  renderProducts(productsContainer, products);
}

function getContainer(selector) {
  return document.querySelector(selector);
}

function renderProducts(container, products) {
  const productList = products
    .map((product) => {
      return `
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
    })
    .join('');

  container.innerHTML = productList;
}

init();
