const setListener = (selector, event, callback) => {
  const element = document.querySelector(selector);

  element.addEventListener(event, callback);
}

const setCustomListener = (event, callback) => {
  document.addEventListener(event, callback);
}

const dispatchCustomEvent = (event, data) => {
  document.dispatchEvent(new CustomEvent(event, {
    detail: {
      ...data,
    }
  }));
}

const getTarget = (target, selector) => {
  return target.matches(selector) ? target : target.closest(selector);
};

const scrollTo = selector =>
  document.querySelector(selector)
    .scrollIntoView({ behavior: 'smooth' });

const replaceLocation = pathname =>
  window.location.replace(pathname);

export {
  setListener,
  setCustomListener,
  dispatchCustomEvent,
  getTarget,
  scrollTo,
  replaceLocation,
};
