export default class View {
  constructor(selector) {
    this.container = document.querySelector(selector);
  }

  template(data) {
    throw new Error('You must implements the "template" method.');
  }

  render(data) {
    this.container.innerHTML = this.template(data);
  }
}
