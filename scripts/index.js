import { Card } from "./card.js";
import { FormValidator } from "./validate.js";

const page = document.querySelector('.page');
const editButton = page.querySelector('.profile__edit-button');
const popupEditProfile = page.querySelector('#popup-edit-profile');
const popupAddPlace = page.querySelector('#popup-add-place');
const popupCard = page.querySelector('#popup-card')
const editFormElement = page.querySelector('#popup-edit-form');
const addFormElement = page.querySelector('#popup-add-form');
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');
const cards = page.querySelector('.elements');
const addButton = page.querySelector('.profile__add-button');
const placeInput = page.querySelector('#place-name-field');
const linkInput = page.querySelector('#image-link-field');

const classListObject = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function closePopup(selectedPopup){
  selectedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}


function openPopup(selectedPopup){
  selectedPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

// Закрытие попапа на esc
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}

// Обработчик крестиков
const closeButtons = page.querySelectorAll('.popup__close-icon');
closeButtons.forEach((button) => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
})

function renameAndOpenProfileForm(){
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function resetAndOpenAddForm() {
  openPopup(popupAddPlace);
  addFormElement.reset();

  addForm.addButtonState();
};

// Функция сохранения новых данных профиля
function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Добавление массива карточек
initialCards.forEach((item) => {
  const card = new Card(item, '#template');
  const cardElement = card.generateCard();
  
  cards.prepend(cardElement);
})

// Функция добавления карточки пользователем
function addFormSubmit (evt) {
  evt.preventDefault();
  const addForm = {
    name: placeInput.value,
    link: linkInput.value
  };
  const card = new Card(addForm, '#template');
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
  closePopup(popupAddPlace);
}



editButton.addEventListener('click', renameAndOpenProfileForm);
addButton.addEventListener('click', resetAndOpenAddForm);

editFormElement.addEventListener('submit', editFormSubmit);
addFormElement.addEventListener('submit', addFormSubmit);


// Закрытие попапа кликом на оверлей
function closePopupByClickOnOverlay(evt, closePopupFunction, anyPopup) {
  if (evt.target.classList.contains('popup')){
    closePopupFunction(anyPopup);
  }
}

popupEditProfile.addEventListener('mousedown', evt => closePopupByClickOnOverlay(evt, closePopup, popupEditProfile));
popupAddPlace.addEventListener('mousedown',  evt => closePopupByClickOnOverlay(evt, closePopup, popupAddPlace));
popupCard.addEventListener('mousedown',  evt => closePopupByClickOnOverlay(evt, closePopup, popupCard));

const addForm = new FormValidator(classListObject, '#popup-add-form');
addForm.enableValidation();

const profileForm = new FormValidator(classListObject, '#popup-edit-form');
profileForm.enableValidation();