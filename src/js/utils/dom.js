const setListener = (selector, event, callback) => {
  const element = document.querySelector(selector);

  element.addEventListener(event, callback);
};

export { setListener };
