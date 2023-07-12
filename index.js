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
const imagePopup = page.querySelector('.popup__opened-image');
const textPopup = page.querySelector('.popup__opened-place');

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

function closePopup(anyPopup){
  anyPopup.classList.remove('popup_opened');
};

function openPopup(anyPopup){
  anyPopup.classList.add('popup_opened');
};

// Обработчик крестиков
const closeButtons = page.querySelectorAll('.popup__close-icon');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
})

function renameAndOpenProfileForm(){
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function resetAndOpenAddForm() {
  openPopup(popupAddPlace);
  addFormElement.reset();
};

// Функция сохранения новых данных профиля
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Функция создания карточки
function createCard(item) {
  const template = document.querySelector('#template').content;
  const placeElement = template.querySelector('.elements__element').cloneNode(true);

  placeElement.querySelector('.elements__image').src = item.link;
  placeElement.querySelector('.elements__image').alt = `Изображение: ${item.name}`;
  placeElement.querySelector('.elements__place').textContent = item.name;

  placeElement.querySelector('.elements__like').addEventListener('click', evt => evt.target.classList.toggle('elements__like_active'));
  placeElement.querySelector('.elements__remove-button').addEventListener('click', evt => evt.target.parentElement.remove());
  placeElement.querySelector('.elements__image').addEventListener('click', () => {
    imagePopup.src = item.link;
    imagePopup.alt = `Изображение: ${item.name}`;
    textPopup.textContent = item.name;
    openPopup(popupCard);
  });
  return placeElement;
}
// Добавление массива карточек
initialCards.forEach((item) => {
  const card = createCard(item);
  cards.prepend(card);
})

// Функция добавления карточки пользователем
function addFormSubmit (evt) {
  evt.preventDefault();
  const addForm = {
    name: placeInput.value,
    link: linkInput.value
  };

  cards.prepend(createCard(addForm));
  closePopup(popupAddPlace);
}

editButton.addEventListener('click', renameAndOpenProfileForm);
addButton.addEventListener('click', resetAndOpenAddForm);

editFormElement.addEventListener('submit', handleFormSubmit);
addFormElement.addEventListener('submit', addFormSubmit);