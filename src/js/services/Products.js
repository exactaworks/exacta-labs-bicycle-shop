import { API_BASE_URL } from '../constants.js'

const getProducts = async (filters = '') => {
  const response = await fetch(`${API_BASE_URL}/products?${filters}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

const getProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

export { getProducts, getProduct };
