import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback, resetPopupFunction){
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._reset = resetPopupFunction;
  };

  _getInputValues(){
    this._inputValues = Array.from(this._popup.querySelectorAll('.popup__input'));
    this.objectOfInputValues = [{name: this._inputValues[0].value, link: this._inputValues[1].value}];
    return this.objectOfInputValues
  };

   close(){
     super.close();
     this._reset();
     
   }

  setEventListeners(){
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._getInputValues()
      this._submitCallback()
    });
    super.setEventListeners();
  }
}