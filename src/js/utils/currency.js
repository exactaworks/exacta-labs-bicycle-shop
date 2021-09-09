const formatToBRL = (number) => {
  return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
}

export { formatToBRL };
