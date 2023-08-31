import Card from "./Сard.js"; 
import Section from "./Section.js";
import FormValidator from "./Validator.js";
import { validationConfig, initialCards } from "./constants.js"

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
const imagePopup = document.querySelector('.popup__opened-image');
const textPopup = document.querySelector('.popup__opened-place');

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

function handleOpenImagePopup(name, link){
  imagePopup.src = link;
  imagePopup.alt = `Изображение: ${link}`;
  textPopup.textContent = name;
  openPopup(popupCard)
}


function renameAndOpenProfileForm(){
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function resetAndOpenAddForm() {
  openPopup(popupAddPlace);
  addFormElement.reset();

  addFormValidator.disableButton();
};

// Функция сохранения новых данных профиля
function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

const cardsFromArray = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#template', handleOpenImagePopup);
    const cardElement = card.generateCard();
    cardsFromArray.addItem(cardElement);
  }
}, '.elements');

cardsFromArray.renderItem();

// Функция добавления карточки пользователем
function addFormSubmit (evt) {
  evt.preventDefault();
  const addForm = [{
    name: placeInput.value,
    link: linkInput.value
  }];

  const cardsFromAddForm = new Section({
    data: addForm,
    renderer: (item) => {
      const card = new Card(item, '#template', handleOpenImagePopup);
      console.log(item)
      const cardElement = card.generateCard();
      cardsFromAddForm.addItem(cardElement);
    }
  }, '.elements')

  cardsFromAddForm.renderItem();
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

const addFormValidator = new FormValidator(validationConfig, addFormElement);
addFormValidator.enableValidation();

const profileFormValidator = new FormValidator(validationConfig, editFormElement);
profileFormValidator.enableValidation();