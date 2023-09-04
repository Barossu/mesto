import './index.css';

import avatar from '../images/avatar.jpg';
import logo from '../images/logo_header.svg';

import Card from "../components/Сard.js"; 
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  profileAvatar,
  headerLogo,
  validationConfig,
  initialCards,
  editButton,
  editFormElement,
  addFormElement,
  nameInput,
  jobInput,
  addButton,
  imagePopup,
  textPopup
} from "../components/constants.js"

profileAvatar.setAttribute('src', avatar);
headerLogo.setAttribute('src', logo)

const popupAddForm = new PopupWithForm('#popup-add-place', () => {
  const cardsFromAddForm = new Section({
    data: popupAddForm.objectOfInputValues,
    renderer: (item) => {
      const card = new Card(item, '#template', (name, link) => placePopup.open(name, link));
      const cardElement = card.generateCard();
      cardsFromAddForm.addItem(cardElement);
    }
  }, '.elements')
  cardsFromAddForm.renderItem();
  popupAddForm.close();  
}, () => popupAddForm._popup.querySelector('.popup__form').reset())

popupAddForm.setEventListeners()
addButton.addEventListener('click', () => popupAddForm.open());



const popupEditForm = new PopupWithForm('#popup-edit-profile', () => {
  const userInfo = new UserInfo({name: '.profile__name', info: '.profile__description'})
  userInfo.setUserInfo()
  popupEditForm.close();
}, () => {
  const userInfo = new UserInfo({name: '.profile__name', info: '.profile__description'})
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().info;

  profileFormValidator.hideInputError(document.querySelector('.popup__input_type_name'));
  profileFormValidator.hideInputError(document.querySelector('.popup__input_type_description'));
  profileFormValidator.enableButton();
})

popupEditForm.setEventListeners();
editButton.addEventListener('click', () => popupEditForm.open());



const placePopup = new PopupWithImage('#popup-card', (name, link) => {
  imagePopup.src = link;
  imagePopup.alt = `Изображение: ${link}`;
  textPopup.textContent = name;
})
placePopup.setEventListeners();

const cardsFromArray = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#template', (name, link) => placePopup.open(name, link));
    const cardElement = card.generateCard();
    cardsFromArray.addItem(cardElement);
  }
}, '.elements');

cardsFromArray.renderItem();



const addFormValidator = new FormValidator(validationConfig, addFormElement);
addFormValidator.enableValidation();

const profileFormValidator = new FormValidator(validationConfig, editFormElement);
profileFormValidator.enableValidation();
