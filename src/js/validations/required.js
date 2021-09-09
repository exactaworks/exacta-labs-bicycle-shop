const required = (value) => {
  if (value.trim() === '') {
    return 'Este campo é obrigatório';
  }

  return '';
}

export { required };
