import { API_BASE_URL } from '../constants.js';

const sendOrder = (data) => {
  return fetch(`${API_BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  });
}

export { sendOrder };
