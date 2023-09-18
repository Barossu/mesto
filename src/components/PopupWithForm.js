import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback){
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._inputValues = Array.from(this._popup.querySelectorAll('.popup__input'));
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupSubmitButton = this._popupForm.querySelector('.popup__button');
    this._oldTextButton = this._popupSubmitButton.textContent;
  };

  formLoading(isLoading){
    if (isLoading){
      this._popupSubmitButton.textContent = 'Сохранение...'
    } else {
      this._popupSubmitButton.textContent = this._oldTextButton;
    }
  }

  _getInputValues(){
    const values = {};
    this._inputValues.forEach(input => values[input.name] = input.value);
    return values;

  };

   close(){
     super.close();
     setTimeout(() => this._popupForm.reset(), 300);
     
   }

  setEventListeners(){
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.formLoading(true)
      this._submitCallback(this._getInputValues());
    });
    super.setEventListeners();
  }
}