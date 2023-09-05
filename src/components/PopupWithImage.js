import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__opened-image');
    this._popupText = this._popup.querySelector('.popup__opened-place');
  }
  
  open(name, link){
    this._popupImage.src = link;
    this._popupImage.alt = `Изображение: ${link}`;
    this._popupText.textContent = name;
    super.open();
  }
}