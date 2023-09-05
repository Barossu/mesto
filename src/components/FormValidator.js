export default class FormValidator{
  constructor(data, form){
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  };

  _showInputError(inputElement, errorMessage){
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement){
    const errorElement =  this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  };

  resetErrors(){
    this._inputList.forEach((item) => this._hideInputError(item));
  };

  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  };

  disableButton(){
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  };

  enableButton(){
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  };

  _toggleButtonState(){
    if (this._hasInvalidInput()){
      this.disableButton()
    } else {
      this.enableButton()
    };
  };

  _setEventListener(){
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
  
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  };

  enableValidation(){
    this._setEventListener();
  };
}
