export default class Card {
  constructor(
  { link, name, likes, _id, owner },
  templateSelector,
  handleImageClick,
  setLikes,
  checkIdOnLike,
  deleteCard,
  userId
  ){
    this._image = link;
    this._name = name;
    this._likesOnCard = likes;
    this._cardId = _id;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._setLikes = setLikes;
    this._checkIdOnLike = checkIdOnLike;
    this._cardOwner = owner;
    this._deleteCard = deleteCard;
    this._userId = userId;
  };

  _getTemplate(){
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  };

  generateCard(){
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.elements__image');
    this._likeButton = this._element.querySelector('.elements__like');
    this._likesCounter = this._element.querySelector('.elements__likes-counter');
    this._trashButton = this._element.querySelector('.elements__remove-button');

    if (this._checkIdOnLike()){
      this._likeButton.classList.add('elements__like_active')
    };
    
    if (this._cardOwner._id !== this._userId){
      this._trashButton.style.display = 'none';
    };

    this._setEventListeners();
  
    this._likesCounter.textContent = this._likesOnCard.length;
    this._imageElement.src = this._image;
    this._imageElement.alt = `Изображение: ${this._name}`;
    this._element.querySelector('.elements__place').textContent = this._name;

    return this._element;
  };

  _openImagePopup(){
    this._handleImageClick(this._name, this._image);
  };


  updateLikes(likes){
    this._likeButton.classList.toggle('elements__like_active');
    this._likesCounter.textContent = likes.likes.length
  }

  _toggleLike(){
    if (this._likeButton.classList.contains('elements__like_active')){
      this._setLikes(this._cardId, true)
    } else {
      this._setLikes(this._cardId, false)  
    }
  }

  delete(){
    this._element.remove();
    this._element = null
  }

  _handleDeleteCard(){
    this._deleteCard(this)
  }

  _setEventListeners(){
    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });
    this._trashButton.addEventListener('click', () => {
      this._handleDeleteCard()
    });
    this._imageElement.addEventListener('click', () => {
      this._openImagePopup();
    });
  };
}