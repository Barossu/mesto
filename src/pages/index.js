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
} from "../utils/constants.js"

profileAvatar.setAttribute('src', avatar);
headerLogo.setAttribute('src', logo)

const popupAddForm = new PopupWithForm('#popup-add-place', (InputValues) => {
  cardsList.renderCard(InputValues);
  popupAddForm.close();  
});

popupAddForm.setEventListeners()
addButton.addEventListener('click', () => popupAddForm.open());

const userInfo = new UserInfo({name: '.profile__name', info: '.profile__description'})




// const popupEditForm = new PopupWithForm('#popup-edit-profile', () => {
//   userInfo.setUserInfo()
//   popupEditForm.close();
// });


const popupEditForm = new PopupWithForm('#popup-edit-profile', (inputValues) => {
  userInfo.setUserInfo(inputValues['name-field'], inputValues['description-field']);
  popupEditForm.close();
});






popupEditForm.setEventListeners();
editButton.addEventListener('click', () => {
  popupEditForm.open();

  const inputInfo = userInfo.getUserInfo();
  nameInput.value = inputInfo.name;
  jobInput.value = inputInfo.info;

  profileFormValidator.resetErrors();
  profileFormValidator.enableButton();
});



const placePopup = new PopupWithImage('#popup-card');
placePopup.setEventListeners();

const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#template', (name, link) => placePopup.open(name, link));
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, '.elements');

cardsList.renderItem();



const addFormValidator = new FormValidator(validationConfig, addFormElement);
addFormValidator.enableValidation();

const profileFormValidator = new FormValidator(validationConfig, editFormElement);
profileFormValidator.enableValidation();
