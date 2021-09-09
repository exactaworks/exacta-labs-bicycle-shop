import View from './View.js';
import { validateField, getFieldValue } from '../utils/form.js';
import { formatToBRL } from '../utils/currency.js';

export default class OrderFormView extends View {
  orderSuccessTemplate(customerEmail) {
    return `
      <div class="flex-middle">
        <img class="mv-1" src="./assets/images/check-email.svg" alt="Check email icon">
      </div>

      <h2 class="ta-center">Tudo certo com sua compra</h2>
      <p class="ta-center">
        Enviamos um e-mail para <b>${customerEmail}</b> com os dados de
        acompanhamento da compra
      </p>

      <div class="flex-middle">
        <a class="button button--outlined button--size-md mv-1" href="/">Conhecer mais produtos</a>
      </div>
    `;
  }

  orderErrorTemplate() {
    return `
      <p class="alert alert--error">
        Ocorreu um erro inesperado, tente novamente mais tarde!
      </p>
    `;
  }

  buildInstallments(installments = 1, totalPrice) {
    return new Array(installments)
      .fill('')
      .reduce((accumulator, _, i) => {
        const installment = i + 1;

        return `
          ${accumulator}
          <option value="${installment}">
            ${installment} vezes de ${formatToBRL(totalPrice / installment)}
          </option>
        `
      }, '');
  }

  getTotalPrice(products) {
    return products.reduce(
      (accumulator, { price, amount }) =>
        accumulator + price * amount,
      0
    );
  }

  template({
    fieldsValues = {},
    fieldsValidations = {},
    paymentMethod,
    products = [],
    orderStatus = 'incomplete',
  } = {}) {
    const totalPrice = this.getTotalPrice(products);

    if (orderStatus === 'succeded') {
      return this.orderSuccessTemplate(fieldsValues.email);
    }

    return `
      <h2>Estamos quase lá, preencha os dados da compra</h2>
      <p class="f-italic fs-sm">Campos obrigatórios com *</p>

      ${orderStatus === 'error' ? this.orderErrorTemplate() : ''}

      <div class="grid grid-column-1-2 mv-1">
        <div>
          <label for="name">* <span class="fw-bold">Nome</span></label>
          <input
            id="name"
            class="input input--full-width"
            name="name"
            type="text"
            value="${getFieldValue(fieldsValues.name)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.name, fieldsValues.name)}
          </span>
        </div>

        <div>
          <label for="lastName">* <span class="fw-bold">Sobrenome</span></label>
          <input
            id="lastName"
            class="input input--full-width"
            name="lastName"
            type="text"
            value="${getFieldValue(fieldsValues.lastName)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.lastName, fieldsValues.lastName)}
          </span>
        </div>
      </div>

      <div class="grid grid-auto-fit mv-1">
        <div>
          <label for="birthDate">* <span class="fw-bold">Data de nascimento</span></label>
          <input
            id="birthDate"
            class="input input--full-width"
            name="birthDate"
            type="date"
            value="${getFieldValue(fieldsValues.birthDate)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.birthDate, fieldsValues.birthDate)}
          </span>
        </div>

        <div>
          <label for="cpf">* <span class="fw-bold">CPF</span></label>
          <input
            id="cpf"
            class="input input--full-width"
            name="cpf"
            type="text"
            data-mask="cpf"
            value="${getFieldValue(fieldsValues.cpf)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.cpf, fieldsValues.cpf)}
          </span>
        </div>
      </div>

      <div class="grid grid-auto-fit mv-1">
        <div>
          <label for="email">* <span class="fw-bold">E-mail</span></label>
          <input
            id="email"
            class="input input--full-width"
            name="email"
            type="text"
            value="${getFieldValue(fieldsValues.email)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.email, fieldsValues.email)}
          </span>
        </div>

        <div>
          <label for="primaryPhone">* <span class="fw-bold">Telefone principal</span></label>
          <input
            id="primaryPhone"
            class="input input--full-width"
            name="primaryPhone"
            type="phone"
            data-mask="phone"
            value="${getFieldValue(fieldsValues.primaryPhone)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.primaryPhone, fieldsValues.primaryPhone)}
          </span>
        </div>

        <div>
          <label for="secondaryPhone"><span class="fw-bold">Telefone secundário</span></label>
          <input
            id="secondaryPhone"
            class="input input--full-width"
            name="secondaryPhone"
            type="phone"
            data-mask="phone"
            value="${getFieldValue(fieldsValues.secondaryPhone)}"
          >
        </div>
      </div>

      <div class="grid grid-auto-fill mv-1">
        <div>
          <label for="zipcode">* <span class="fw-bold">CEP</span></label>
          <input
            id="zipcode"
            class="input input--full-width"
            name="zipcode"
            type="text"
            data-mask="zipcode"
            value="${getFieldValue(fieldsValues.zipcode)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.zipcode, fieldsValues.zipcode)}
          </span>
        </div>
      </div>

      <div class="grid grid-column-2-1 mv-1">
        <div>
          <label for="address">* <span class="fw-bold">Endereço</span></label>
          <input
            id="address"
            class="input input--full-width"
            name="address"
            type="text"
            value="${getFieldValue(fieldsValues.address)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.address, fieldsValues.address)}
          </span>
        </div>

        <div>
          <label for="addressNumber">* <span class="fw-bold">Número</span></label>
          <input
            id="addressNumber"
            class="input input--full-width"
            name="addressNumber"
            type="text"
            value="${getFieldValue(fieldsValues.addressNumber)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.addressNumber, fieldsValues.addressNumber)}
          </span>
        </div>
      </div>

      <div class="grid grid-auto-fit mv-1">
        <div>
          <label for="district">* <span class="fw-bold">Bairro</span></label>
          <input
            id="district"
            class="input input--full-width"
            name="district"
            type="text"
            value="${getFieldValue(fieldsValues.district)}"
          >

          <span class="input-validation">
            ${validateField(fieldsValidations.district, fieldsValues.district)}
          </span>
        </div>

        <div>
          <label for="state">* <span class="fw-bold">Estado</span></label>
          <select
            id="state"
            class="input input--full-width"
            name="state"
            value="${getFieldValue(fieldsValues.state)}"
          >
            <option value="sp">São Paulo</option>
          </select>

          <span class="input-validation">
            ${validateField(fieldsValidations.state, fieldsValues.state)}
          </span>
        </div>

        <div>
          <label for="city">* <span class="fw-bold">Cidade</span></label>
          <select
            id="city"
            class="input input--full-width"
            name="city"
            value="${getFieldValue(fieldsValues.city)}"
          >
            <option value="araraquara">Araraquara</option>
          </select>

          <span class="input-validation">
            ${validateField(fieldsValidations.city, fieldsValues.city)}
          </span>
        </div>
      </div>

      <div class="grid grid-column-2-1 mv-1">
        <div>
          <label for="complement"><span class="fw-bold">Complemento</span></label>
          <input
            id="complement"
            class="input input--full-width"
            name="complement"
            type="text"
            value="${getFieldValue(fieldsValues.complement)}"
          >
        </div>
      </div>

      <h3 class="mv-2">Escolha o método de pagamento</h3>

      <div class="grid grid-auto-fill mv-1">
        <div>
          <label class="inline-block mr-1" for="bankSlip">
            <input
              id="bankSlip"
              type="radio"
              name="paymentMethod"
              value="bank-slip"
              ${paymentMethod === 'bankSlip' ? 'checked' : ''}
            />
            <span class="fw-bold">Boleto</span>
          </label>

          <label class="inline-block" for="card">
            <input
              id="card"
              type="radio"
              name="paymentMethod"
              value="card"
              ${paymentMethod === 'card' ? 'checked' : ''}
            />
            <span class="fw-bold">Cartão</span>
          </label>
        </div>
      </div>

      <p>
        <b>
          Total
          ${formatToBRL(totalPrice)}
        </b>
      </p>

      <div id="cardInfo" class="${paymentMethod !== 'card' ? 'hide' : ''}">
        <div class="grid grid-auto-fill mv-1">
          <div>
            <label for="installments">* <span class="fw-bold">Parcelas</span></label>
            <select
              id="installments"
              class="input input--full-width"
              name="installments"
              value="${getFieldValue(fieldsValues.installments)}"
            >
              ${this.buildInstallments(6, totalPrice)}
            </select>
          </div>
        </div>

        <div class="grid grid-column-2-1 mv-1">
          <div>
            <label for="cardNumber">* <span class="fw-bold">Número do cartão</span></label>
            <input
              id="cardNumber"
              class="input input--full-width"
              name="cardNumber"
              type="text"
              data-mask="cardNumber"
              value="${getFieldValue(fieldsValues.cardNumber)}"
            >

            <span class="input-validation">
              ${validateField(fieldsValidations.cardNumber, fieldsValues.cardNumber)}
            </span>
          </div>

          <div>
            <label for="cardDate">* <span class="fw-bold">Vencimento</span></label>
            <input
              id="cardDate"
              class="input input--full-width"
              name="cardDate"
              type="text"
              data-mask="cardDate"
              value="${getFieldValue(fieldsValues.cardDate)}"
            >

            <span class="input-validation">
              ${validateField(fieldsValidations.cardDate, fieldsValues.cardDate)}
            </span>
          </div>
        </div>

        <div class="grid grid-column-2-1 mv-1">
          <div>
            <label for="cardName">
              * <span class="fw-bold">Nome (como está escrito no cartão)</span>
            </label>

            <input
              id="cardName"
              class="input input--full-width"
              name="cardName"
              type="text"
              value="${getFieldValue(fieldsValues.cardName)}"
            >

            <span class="input-validation">
              ${validateField(fieldsValidations.cardName, fieldsValues.cardName)}
            </span>
          </div>

          <div>
            <label for="cardCVV">* <span class="fw-bold">CVV</span></label>
            <input
              id="cardCVV"
              class="input input--full-width"
              name="cardCVV"
              type="text"
              data-mask="cardCVV"
              value="${getFieldValue(fieldsValues.cardCVV)}"
            >

            <span class="input-validation">
              ${validateField(fieldsValidations.cardCVV, fieldsValues.cardCVV)}
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-auto-fill mv-2">
        <button class="button button--primary">Finalizar a compra</button>
      </div>
    `;
  }
}
