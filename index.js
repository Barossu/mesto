let page = document.querySelector('.page');
let editbutton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let closebutton = popup.querySelector('.popup__close-icon');
let formelement = popup.querySelector('.popup__form');
let nameinput = popup.querySelector('.popup__input_type_name');
let jobinput = popup.querySelector('.popup__input_type_description');
let savebutton = popup.querySelector('.popup__button');
let profilename = page.querySelector('.profile__name');
let profiledescription = page.querySelector('.profile__description');

function handleFormSubmit (evt) {
  evt.preventDefault();
  profilename.textContent = nameinput.value;
  profiledescription.textContent = jobinput.value;
  popup.classList.remove('popup_opened');
}

function toggleform() {
  if (popup.classList.contains('popup_opened') !== true) {
    popup.classList.add('popup_opened');
    nameinput.value = profilename.textContent;
    jobinput.value = profiledescription.textContent;
  }
  else {
    popup.classList.remove('popup_opened');
  }
}

editbutton.addEventListener('click', toggleform);
closebutton.addEventListener('click', toggleform);
formelement.addEventListener('submit', handleFormSubmit);