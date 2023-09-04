import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, renameImagePopup){
    super(popupSelector);
    this._renameImagePopup = renameImagePopup
  }
  
  open(name, link){
    this._renameImagePopup(name, link);
    super.open();
  }
}