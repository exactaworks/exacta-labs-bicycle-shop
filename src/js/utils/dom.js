const setListener = (selector, event, callback) => {
  const element = document.querySelector(selector);

  element.addEventListener(event, callback);
};

const getTarget = (target, selector) => {
  return target.matches(selector) ? target : target.closest(selector);
};

export { setListener, getTarget };
