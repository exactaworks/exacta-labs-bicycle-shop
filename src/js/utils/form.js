const getFieldsValues = (formElement) =>
  Object.fromEntries(new FormData(formElement));

const getFieldValue = (value) => value || '';

const isInvalid = (fieldsValues, fieldsValidations) => {
  return Object.entries(fieldsValidations).some(([field, validations]) => {
    return validations.some((validation) => validation(fieldsValues[field]));
  });
}

const validateField = (validations = [], value = '') => {
  return validations
    .map((validation) => validation(value))
    .filter((error) => error !== '')[0] || '';
}

export { getFieldsValues, getFieldValue, validateField, isInvalid };
