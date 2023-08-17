const imagePopup = document.querySelector('.popup__opened-image');
const textPopup = document.querySelector('.popup__opened-place');

export class Card {
  constructor(data, templateSelector){
    this._image = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  };

  _getTemplate(){
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  };

  generateCard(){
    this._element = this._getTemplate();

    this._setEventListeners();
    
    this._element.querySelector('.elements__image').src = this._image;
    this._element.querySelector('.elements__image').alt = `Изображение: ${this._name}`;
    this._element.querySelector('.elements__place').textContent = this._name;

    return this._element;
  };

  _openImagePopup(){
    this._element = this._getTemplate();

    imagePopup.src = this._image;
    imagePopup.alt = `Изображение: ${this._name}`;
    textPopup.textContent = this._name;
    document.querySelector('#popup-card').classList.add('popup_opened');
  };

  _setEventListeners(){
    this._element = this._getTemplate();

    this._element.querySelector('.elements__like').addEventListener('click', evt => evt.target.classList.toggle('elements__like_active'));
    this._element.querySelector('.elements__remove-button').addEventListener('click', () => this._element.remove());
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._openImagePopup();
    });
  }
}