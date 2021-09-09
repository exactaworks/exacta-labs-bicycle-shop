const BLACKLIST = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '12345678909',
];

const STRICT_STRIP_REGEX = /[.-]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;

const verifierDigit = (digits) => {
  const numbers = digits
    .split('')
    .map(number => parseInt(number, 10));

  const modulus = numbers.length + 1
  const multiplied = numbers.map((number, index) => number * (modulus - index));
  const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;

  return (mod < 2 ? 0 : 11 - mod);
}

const strip = (number, strict) => {
  const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;

  return (number || '').replace(regex, '');
}

const isCPF = (number, strict) => {
  const stripped = strip(number, strict);
  const error = 'CPF inválido';

  // CPF must be defined
  if (!stripped) {
    return error;
  }

  // CPF must have 11 chars
  if (stripped.length !== 11) {
    return error;
  }

  // CPF can't be blacklisted
  if (BLACKLIST.includes(stripped)) {
    return error;
  }

  let numbers = stripped.substr(0, 9);

  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) !== stripped.substr(-2) ? error : '';
}

export { isCPF };
