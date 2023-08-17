export class FormValidator{
  constructor(data, formSelector){
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formSelector = formSelector;
  };

  _showInputError(inputElement, errorMessage){
    this._form = document.querySelector(this._formSelector);
    this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement){
    this._form = document.querySelector(this._formSelector);
    this._errorElement =  this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this._errorClass);
  };

  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput(){
    this._form = document.querySelector(this._formSelector);
    this._inputList = Array.from( this._form.querySelectorAll(this._inputSelector));
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  };

  addButtonState(){
    this._form = document.querySelector(this._formSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  };

  _removeButtonState(){
    this._form = document.querySelector(this._formSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  };

  _toggleButtonState(){
    if (this._hasInvalidInput()){
      this.addButtonState()
    } else {
      this._removeButtonState()
    };
  };

  _setEventListener(){
    this._form = document.querySelector(this._formSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
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





// const showInputError = (formElement, inputElement, errorMessage, settings) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(settings.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(settings.errorClass);
// };

// const hideInputError = (formElement, inputElement, settings) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(settings.inputErrorClass);
//   errorElement.textContent = '';
//   errorElement.classList.remove(settings.errorClass);
// };

// const checkInputValidity = (formElement, inputElement, settings) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, settings);
//   } else {
//     hideInputError(formElement, inputElement, settings);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid
//   })
// };

// const addButtonState = (buttonElement, settings) => {
//   buttonElement.classList.add(settings.inactiveButtonClass);
//   buttonElement.setAttribute('disabled', true);
// }

// const removeButtonState = (buttonElement, settings) => {
//   buttonElement.classList.remove(settings.inactiveButtonClass);
//   buttonElement.removeAttribute('disabled');
// }

// const toggleButtonState = (inputList, buttonElement, settings) => {
//   if (hasInvalidInput(inputList)) {
//     addButtonState(buttonElement, settings)
//   } else {
//     removeButtonState(buttonElement, settings)
//   }
// };

// const setEventListener = (formElement, settings) => {
//   const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
//   const buttonElement = formElement.querySelector(settings.submitButtonSelector);

//   toggleButtonState(inputList, buttonElement, settings);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, settings);
//       toggleButtonState(inputList, buttonElement, settings);
//     })
//   })
// };

// const enableValidation = (settings) => {
//   const formList = Array.from(document.querySelectorAll(settings.formSelector));
//   formList.forEach((formElement) => {
//     setEventListener(formElement, settings);
//   })
// }

// enableValidation(classListObject);
