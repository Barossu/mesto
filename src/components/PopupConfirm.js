import Popup from "./Popup.js";

export default class PopupConfirm extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form');
  };

  open(cardId){
    this._cardId = cardId
    super.open();
  }

  submitCallback(deleteFunction){
    this._formSubmit = deleteFunction
  }

  setEventListeners(){
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._cardId)
      this.close()
    })
    super.setEventListeners()
  }

}