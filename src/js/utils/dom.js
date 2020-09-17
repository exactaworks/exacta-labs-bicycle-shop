const setListener = (selector, event, callback) => {
  const element = document.querySelector(selector);

  element.addEventListener(event, (ev) => callback(ev.target.value));
};

export { setListener };
