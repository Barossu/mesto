import './index.css';

import logo from '../images/logo_header.svg';

import Api from '../components/Api.js';
import Card from "../components/Сard.js"; 
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from '../components/PopupConfirm.js';
import UserInfo from "../components/UserInfo.js";
import {
  profileAvatar,
  headerLogo,
  validationConfig,
  editButton,
  editFormElement,
  addFormElement,
  nameInput,
  jobInput,
  addButton,
  editAvatarButton,
  editAvatarForm,
  profileName,
  profileInfo
} from "../utils/constants.js"
headerLogo.setAttribute('src', logo);



const api = new Api({
  baseURL: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'c67093b7-30e8-4ad4-90f8-188ef4c56cb8',
    'Content-Type': 'application/json'
  }
})


api.getMyId()
  .then(myId =>{
  api.getInintialCards()
    .then(res => {
      const cardsList = new Section({
        data: res,
        renderer: (item) => {
          const card = new Card(
            item,
            '#template',
            (name, link) => placePopup.open(name, link),
            (cardId) => removeCardPopup.open(cardId),
            (cardId, method) => api.toggleLike(cardId, method),
            (owner, button) => {
              if (owner._id !== myId){
                button.style.display = 'none';
              }
            },
            () => {
              return item.likes.some(item => {
                return item._id === myId
              })
            },
            (card) => {
              removeCardPopup.submitCallback((cardId) => {
                api.deleteCard(cardId)
                  .then(() => card.delete())
                  .catch(err => console.log(err));
              })
            }
          );
          const cardElement = card.generateCard();  
          cardsList.addItem(cardElement);
        }
      }, '.elements');
      cardsList.renderItem();
      

      const popupAddForm = new PopupWithForm('#popup-add-place', (InputValues) => {
        api.postNewCard(InputValues)
          .then(newCard => {
            cardsList.renderCard(newCard)
          })
          .then(() => popupAddForm.close())
          .catch(err => console.log(err))
          .finally(() => {
            setTimeout(() => popupAddForm.formLoading(false), 500)
          });
      });
      
      popupAddForm.setEventListeners()
      addButton.addEventListener('click', () => {
        popupAddForm.open();
        addFormValidator.disableButton();
        addFormValidator.resetErrors();
      });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));


api.getMyData()
  .then(res => {
    profileAvatar.setAttribute('src', res.avatar);
    profileName.textContent = res.name;
    profileInfo.textContent = res.about;
  })
  .catch(err => console.log(err));
  

const userInfo = new UserInfo({profileNameSelector: '.profile__name', profileInfoSelector: '.profile__description'});

const popupEditForm = new PopupWithForm('#popup-edit-profile', (inputValues) => {
  api.patchProfileInfo(inputValues['name-field'], inputValues['description-field'])
    .then((res) => userInfo.setUserInfo(res.name, res.about))
    .then(() => popupEditForm.close())
    .catch(err => console.log(err))
    .finally(() => {
      setTimeout(() => popupEditForm.formLoading(false), 500)
    });
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

const removeCardPopup = new PopupConfirm('#popup-delete')
  removeCardPopup.setEventListeners();


const popupEditAvatar = new PopupWithForm('#popup-avatar', (inputValues) => {
  api.patchProfileAvatar(inputValues)
    .then(res => profileAvatar.setAttribute('src', res.avatar))
    .then(() => popupEditAvatar.close())
    .catch(err => console.log(err))
    .finally(() => {
      setTimeout(() => popupEditAvatar.formLoading(false), 500)
    });
})

popupEditAvatar.setEventListeners();
editAvatarButton.addEventListener('click', () => {
  editAvatarPopupValidator.resetErrors();
  editAvatarPopupValidator.disableButton();
  popupEditAvatar.open()
})


const placePopup = new PopupWithImage('#popup-card');
placePopup.setEventListeners();


const addFormValidator = new FormValidator(validationConfig, addFormElement);
addFormValidator.enableValidation();

const profileFormValidator = new FormValidator(validationConfig, editFormElement);
profileFormValidator.enableValidation();

const editAvatarPopupValidator = new FormValidator(validationConfig, editAvatarForm);
editAvatarPopupValidator.enableValidation();
