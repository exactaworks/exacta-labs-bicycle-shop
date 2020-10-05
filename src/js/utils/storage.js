import { APP_STORAGE_KEY } from '../constants.js';

const setStorageItem = (key, item) => {
  localStorage.setItem(APP_STORAGE_KEY + key, JSON.stringify(item));
};

const getStorageItem = (key) =>
  JSON.parse(localStorage.getItem(APP_STORAGE_KEY + key));

const removeStorageItem = (key) => {
  localStorage.removeItem(APP_STORAGE_KEY + key);
};

export { setStorageItem, getStorageItem, removeStorageItem };
