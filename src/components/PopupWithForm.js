import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback){
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._inputValues = Array.from(this._popup.querySelectorAll('.popup__input'));
  };

  _getInputValues(){
    const values = {};
    this._inputValues.forEach(input => values[input.name] = input.value);
    return values;

  };

   close(){
     super.close();
     this._popup.querySelector('.popup__form').reset();
     
   }

  setEventListeners(){
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
    super.setEventListeners();
  }
}