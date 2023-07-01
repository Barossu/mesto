let Page = document.querySelector('.page');
let EditButton = Page.querySelector('.profile__edit-button');
let Popup = Page.querySelector('.popup');
let CloseButton = Popup.querySelector('.popup__close-icon');
let FormElement = Popup.querySelector('.popup__form');
let NameInput = Popup.querySelector('.popup__input_type_name');
let JobInput = Popup.querySelector('.popup__input_type_description');
let SaveButton = Popup.querySelector('.popup__button');
let ProfileName = Page.querySelector('.profile__name');
let ProfileDescription = Page.querySelector('.profile__description');

function handleFormSubmit (evt) {
  evt.preventDefault();
  ProfileName.textContent = NameInput.value;
  ProfileDescription.textContent = JobInput.value;
  Popup.classList.remove('popup_opened');
}

function toggleform() {
  if (Popup.classList.contains('popup_opened') !== true) {
    Popup.classList.add('popup_opened');
    NameInput.value = ProfileName.textContent;
    JobInput.value = ProfileDescription.textContent;
  }
  else {
    Popup.classList.remove('popup_opened');
  }
}

EditButton.addEventListener('click', toggleform);
CloseButton.addEventListener('click', toggleform);
FormElement.addEventListener('submit', handleFormSubmit);