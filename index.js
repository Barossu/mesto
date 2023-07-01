let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-icon');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_description');
let saveButton = popup.querySelector('.popup__button');
let profileName = page.querySelector('.profile__name');
let profileDescription = page.querySelector('.profile__description');

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

function toggleform() {
  if (popup.classList.contains('popup_opened') !== true) {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
  }
  else {
    popup.classList.remove('popup_opened');
  }
}

editButton.addEventListener('click', toggleform);
closeButton.addEventListener('click', toggleform);
formElement.addEventListener('submit', handleFormSubmit);