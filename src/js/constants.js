const APP_STORAGE_KEY = '@bicyle-shop';
const CART_STORAGE_KEY = `${APP_STORAGE_KEY}/cart`;

const CUSTOM_EVENTS = {
  CART_ADD: 'cart:add',
  CART_INCREMENT: 'cart:increment',
  CART_DECREMENT: 'cart:decrement',
  CART_REMOVE: 'cart:remove',
};

export { APP_STORAGE_KEY, CART_STORAGE_KEY, CUSTOM_EVENTS };
