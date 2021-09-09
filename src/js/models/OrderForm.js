import { required } from '../validations/required.js';
import { isGreaterThanToday } from '../validations/date.js';
import { isCPF } from '../validations/cpf.js';
import { isEmail } from '../validations/email.js';
import { isCardDateValid } from '../validations/card.js';
import { phoneMask } from '../masks/phone.js';
import { cpfMask } from '../masks/cpf.js';
import { zipcodeMask } from '../masks/zipcode.js';
import { cardDateMask, cardNumberMask, cardCVVMask } from '../masks/card.js';

export default class OrderFormModel {
  paymentMethod = 'bankSlip';

  fieldsValidations = {
    name: [required],
    lastName: [required],
    birthDate: [required, isGreaterThanToday],
    cpf: [required, isCPF],
    email: [required, isEmail],
    primaryPhone: [required],
    zipcode: [required],
    address: [required],
    addressNumber: [required],
    district: [required],
    city: [required],
    state: [required],
  };

  cardFieldsValidations = {
    installments: [required],
    cardNumber: [required],
    cardDate: [required, isCardDateValid],
    cardName: [required],
    cardCVV: [required],
  };

  fieldsMasks = {
    phone: phoneMask,
    cpf: cpfMask,
    zipcode: zipcodeMask,
    cardDate: cardDateMask,
    cardNumber: cardNumberMask,
    cardCVV: cardCVVMask,
  }
}
