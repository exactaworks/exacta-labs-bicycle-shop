const isEmail = (email) =>
  !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? 'E-mail inválido' : '';

export { isEmail };
