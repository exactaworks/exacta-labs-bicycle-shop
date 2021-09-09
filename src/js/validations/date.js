const isGreaterThanToday = (date) => {
  const today = new Date().getTime();

  return new Date(date).getTime() > today ? 'Data deve ser menor do que a atual' : '';
}

export { isGreaterThanToday };
