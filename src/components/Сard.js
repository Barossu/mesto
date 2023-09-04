export default class Card {
  constructor({ link, name }, templateSelector, handleOpenImagePopup){
    this._image = link;
    this._name = name;
    this._templateSelector = templateSelector;
    this._handleOpenImagePopup = handleOpenImagePopup;
  };

  _getTemplate(){
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  };

  generateCard(){
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.elements__image');
    this._like = this._element.querySelector('.elements__like');

    this._setEventListeners();
    
    this._imageElement.src = this._image;
    this._imageElement.alt = `Изображение: ${this._name}`;
    this._element.querySelector('.elements__place').textContent = this._name;

    return this._element;
  };

  _openImagePopup(){
    this._handleOpenImagePopup(this._name, this._image);
  };

  _toggleLike(){
    this._like.classList.toggle('elements__like_active')
  }

  _setEventListeners(){
    this._like.addEventListener('click', () => this._toggleLike());
    this._element.querySelector('.elements__remove-button').addEventListener('click', () => this._element.remove());
    this._imageElement.addEventListener('click', () => {
      this._openImagePopup();
    });
  };
}