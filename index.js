const page = document.querySelector('.page');
const editButton = page.querySelector('.profile__edit-button');
const popupEditProfile = page.querySelector('#popup-edit-profile');
const popupAddPlace = page.querySelector('#popup-add-place');
const editFormCloseButton = popupEditProfile.querySelector('#edit-close-button');
const addFormCloseButton = popupAddPlace.querySelector('#add-close-button');
const editFormElement = page.querySelector('#popup-edit-form');
const addFormElement = page.querySelector('#popup-add-form');
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const saveButton = page.querySelector('.popup__button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');
const cards = page.querySelector('.elements');
const addButton = page.querySelector('.profile__add-button');
const placeInput = page.querySelector('#place-name-field');
const linkInput = page.querySelector('#image-link-field');

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

// Функция сохранения новых данных профиля
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupEditProfile.classList.remove('popup_opened');
}

function addFormSubmit (evt) {
  evt.preventDefault();
  let addForm = {
    name: placeInput.value,
    link: linkInput.value
  };
  addPlace(addForm);
  popupAddPlace.classList.remove('popup_opened');
}

// Функция переключения формы редактирования профиля
function toggleProfileForm() {
  if (popupEditProfile.classList.contains('popup_opened') !== true) {
    popupEditProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
  }
  else {
    popupEditProfile.classList.remove('popup_opened');
  }
}

// Функция переключения формы добавления карточек
function toggleAddForm() {
  if (popupAddPlace.classList.contains('popup_opened') !== true) {
    popupAddPlace.classList.add('popup_opened');
    placeInput.value = '';
    linkInput.value = '';
  }
  else {
    popupAddPlace.classList.remove('popup_opened');
  }
}

// Функция добавления карточек из массива для подключения в forEach
function addPlace(item) {
  const template = document.querySelector('#template').content;
  const placeElement = template.querySelector('.elements__element').cloneNode(true);

  placeElement.querySelector('.elements__image').src = item.link;
  placeElement.querySelector('.elements__image').alt = `Изображение: ${item.name}`;
  placeElement.querySelector('.elements__place').textContent = item.name;

  placeElement.querySelector('.elements__like').addEventListener('click', evt => evt.target.classList.toggle('elements__like_active'));
  placeElement.querySelector('.elements__remove-button').addEventListener('click', evt => evt.target.parentElement.remove())
  cards.prepend(placeElement);
}

initialCards.forEach(addPlace);


editButton.addEventListener('click', toggleProfileForm);
editFormCloseButton.addEventListener('click', toggleProfileForm);
editFormElement.addEventListener('submit', handleFormSubmit);
addButton.addEventListener('click', toggleAddForm);
addFormCloseButton.addEventListener('click', toggleAddForm);
addFormElement.addEventListener('submit', addFormSubmit);

