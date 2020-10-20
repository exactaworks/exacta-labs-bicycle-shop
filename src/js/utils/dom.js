const setListener = (selector, event, callback) => {
  const element = document.querySelector(selector);

  element.addEventListener(event, callback);
};

const getTarget = (target, selector) => {
  return target.matches(selector) ? target : target.closest(selector);
};

const setCustomListener = (event, callback) => {
  document.addEventListener(event, callback);
};

const dispatchCustomEvent = (event, data) => {
  document.dispatchEvent(
    new CustomEvent(event, {
      detail: {
        ...data,
      },
    })
  );
};

export { setListener, getTarget, setCustomListener, dispatchCustomEvent };
