export default class Section {
  constructor({ renderer }, selector){
    //this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  };

  prependItem(element){
    this._container.prepend(element);
  }

  appendItem(element){
    this._container.append(element);
  }

  renderItems(initialCards){
    initialCards.forEach((item) => {
      this._renderer(item, (element) => this.appendItem(element))
    });
  };

  renderItemWithRenderer(item){
    this._renderer(item, (element) => this.prependItem(element))

  }
}