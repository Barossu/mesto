export default class Section {
  constructor({ data, renderer }, selector){
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  };
  
  addItem(element){
    this._container.prepend(element);
  };

  renderItem(){
    this._renderedItems.forEach(this._renderer);
  };

  renderCard(item){
    this._renderer(item)
  }
}