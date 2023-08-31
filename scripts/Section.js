export default class Section {
  constructor({ data, renderer }, selector){
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  };

  clear(){
    this._container.innerHTML = '';
  }

  addItem(element){
    this._container.prepend(element);
  };

  renderItem(){
    this.clear;
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    })
  };
}