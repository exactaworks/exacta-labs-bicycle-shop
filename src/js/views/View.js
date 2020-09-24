export default class View {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  template(model) {
    throw new Error('You must implements the "template" method.');
  }

  render(model) {
    this.element.innerHTML = this.template(model);
  }
}
