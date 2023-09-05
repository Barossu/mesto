export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  close(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  open(){
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  _closeByClickOnOverlay(evt){
    if (evt.target.classList.contains('popup')){
      this.close();
    }
  };

  _handleEscClose(evt){
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  setEventListeners(){
    this._popup.querySelector('.popup__close-icon').addEventListener('click', () => this.close());
    this._popup.addEventListener('mousedown', evt => this._closeByClickOnOverlay(evt));
  };
}