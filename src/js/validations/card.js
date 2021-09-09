const strip = (value) => value.replace('/', '');

const isCardDateValid = (value) => {
  const error = 'Data do cartão inválida';

  if (strip(value).length !== 6) {
    return error;
  }

  const [month, year] = value.split('/');
  const parsedMonth = parseInt(month);
  const parsedYear = parseInt(year);

  if (parsedMonth < 1 || parsedMonth > 12) {
    return error;
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (parsedYear < currentYear) {
    return error;
  }

  if (parsedYear === currentYear && parsedMonth < currentMonth) {
    return error;
  }

  return '';
}

export { isCardDateValid };
