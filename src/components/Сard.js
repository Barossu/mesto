export default class Card {
  constructor(
  { link, name, likes, _id, owner },
  templateSelector,
  handleOpenImagePopup,
  handleOpenRemovePopup,
  toggleLikeFunction,
  removeTrashButton,
  checkIdOnLike,
  deleteCard
  ){
    this._image = link;
    this._name = name;
    this._likesOnCard = likes;
    this._cardId = _id;
    this._templateSelector = templateSelector;
    this._handleOpenImagePopup = handleOpenImagePopup;
    this._handleOpenRemovePopup = handleOpenRemovePopup;
    this._toggleLikeFunction = toggleLikeFunction;
    this._checkIdOnLike = checkIdOnLike;
    this._cardOwner = owner;
    this._removeTrashButton = removeTrashButton;
    this._deleteCard = deleteCard;
  };

  _getTemplate(){
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  };

  generateCard(){
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.elements__image');
    this._like = this._element.querySelector('.elements__like');
    this._likesCounter = this._element.querySelector('.elements__likes-counter');
    this._trashButton = this._element.querySelector('.elements__remove-button');

    if (this._checkIdOnLike()){
      this._like.classList.add('elements__like_active')
    }

    this._removeTrashButton(this._cardOwner, this._trashButton)
    this._setEventListeners();
  
    this._likesCounter.textContent = this._likesOnCard.length;
    this._imageElement.src = this._image;
    this._imageElement.alt = `Изображение: ${this._name}`;
    this._element.querySelector('.elements__place').textContent = this._name;

    return this._element;
  };

  _openImagePopup(){
    this._handleOpenImagePopup(this._name, this._image);
  };

  _toggleLike(){
    if (this._like.classList.contains('elements__like_active')){
      this._like.classList.remove('elements__like_active');
      this._toggleLikeFunction(this._cardId, 'DELETE')
        .then(res => this._likesCounter.textContent = res.likes.length)
        .catch(err => console.log(err));

    } else {
      this._like.classList.add('elements__like_active');
      this._toggleLikeFunction(this._cardId, 'PUT')
        .then(res => this._likesCounter.textContent = res.likes.length)
        .catch(err => console.log(err));
    }
  }

  delete(){
    this._element.remove();
  }

  _handleDeleteCard(){
    this._deleteCard(this)
  }

  _setEventListeners(){
    this._like.addEventListener('click', () => {
      this._toggleLike();
    });
    this._trashButton.addEventListener('click', () => {
      this._handleDeleteCard()
      this._handleOpenRemovePopup(this._cardId);
    });
    this._imageElement.addEventListener('click', () => {
      this._openImagePopup();
    });
  };
}