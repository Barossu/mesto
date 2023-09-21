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
  headerLogo,
  validationConfig,
  editButton,
  editFormElement,
  addFormElement,
  nameInput,
  jobInput,
  addButton,
  editAvatarButton,
  editAvatarForm
} from "../utils/constants.js"
headerLogo.setAttribute('src', logo);

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileInfoSelector: '.profile__description',
  profileAvatarSelector: '.profile__avatar'
});

const api = new Api({
  baseURL: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'c67093b7-30e8-4ad4-90f8-188ef4c56cb8',
    'Content-Type': 'application/json'
  }
})

let myId ='';

function createCard(cardInfo){
  const card = new Card(
    cardInfo,
    '#template',
    (name, link) => placePopup.open(name, link),
    (cardId, isLiked) => {
      api.toggleLike(cardId, isLiked)
        .then(res => card.updateLikes(res))
        .catch(err => console.log(err));
    },
    () => {
      return cardInfo.likes.some(item => {
        return cardInfo._id === myId
      })
    },
    (card) => {
      removeCardPopup.open()
      removeCardPopup.submitCallback(() => {
        api.deleteCard(cardInfo._id)
          .then(() => {
            card.delete()
            removeCardPopup.close()
          })
          .catch(err => console.log(err));
      })
    },
    myId);
  return card.generateCard();
}

const cardsSection = new Section({
  renderer: (item) => {
    const pop = createCard(item);
    cardsSection.appendItem(pop)
  }
}, '.elements')


Promise.all([
  api.getProfileInfo(),
  api.getInitialCards()
])
  .then(([profile, cards]) => {
    myId = profile._id
    userInfo.setUserAvatar(profile.avatar);
    userInfo.setUserInfo(profile.name, profile.about);

    cardsSection.renderItems(cards)
  })
  .catch((err) => console.log(err));


const popupAddForm = new PopupWithForm('#popup-add-place', (InputValues) => {
  popupAddForm.setSubmitButtonText('Добавление...')
  api.postNewCard(InputValues)
    .then(newCard => {
      const pop = createCard(newCard)
      cardsSection.prependItem(pop)
      popupAddForm.close()
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupAddForm.setDefaultSubmitButtonText()
    });
});

popupAddForm.setEventListeners()
addButton.addEventListener('click', () => {
  popupAddForm.open();
  addFormValidator.disableButton();
  addFormValidator.resetErrors();
});



const popupEditForm = new PopupWithForm('#popup-edit-profile', (inputValues) => {
  popupEditForm.setSubmitButtonText('Сохранение...')
  api.patchProfileInfo(inputValues['name-field'], inputValues['description-field'])
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about)
      popupEditForm.close()
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupEditForm.returnSubmitButtonText()
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
  popupEditAvatar.setSubmitButtonText('Сохранение...')
  api.patchProfileAvatar(inputValues)
    .then(res => {
      userInfo.setUserAvatar(res.avatar);
      popupEditAvatar.close()
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupEditAvatar.returnSubmitButtonText()
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
