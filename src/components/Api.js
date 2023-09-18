export default class Api {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._key = options.headers.authorization;
    this._contentType = options.headers['Content-Type'];
  };
  
  getInintialCards() {
    return fetch(`${this._baseURL}/cards`, {
      method: 'GET',
      headers:{
        authorization: this._key
      }
    })
      .then(res => {
        if (res.ok){
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  };

  postNewCard(cardValues){
    return fetch(`${this._baseURL}/cards`, {
      method: 'POST',
      headers:{
        authorization: this._key,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        name: cardValues.name,
        link: cardValues.link
      })
    })
    .then(res => {
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };


  getMyData(){
    return fetch(`${this._baseURL}/users/me`, {
      method: 'GET',
      headers:{
        authorization: this._key
      }
    })
      .then(res => {
        if (res.ok){
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  };

  patchProfileInfo(profileName, profileInfo){
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers:{
        authorization: this._key,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        name: profileName,
        about: profileInfo
      })
    })
    .then(res => {
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };

  patchProfileAvatar(avatarLink){
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: 'PATCH',
      headers:{
        authorization: this._key,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        avatar: avatarLink.link
      })
    })
    .then(res => {
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };

  toggleLike(cardId, method){
    return fetch(`${this._baseURL}/cards/${cardId}/likes`, {
      method: method,
      headers:{
        authorization: this._key,
        'Content-Type': this._contentType
      }
    })
    .then(res => {
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };

  getMyId(){
    return this.getMyData()
      .then(res => {
        return res._id
      })
  };

  deleteCard(cardId){
    return fetch(`${this._baseURL}/cards/${cardId}`, {
      method: 'DELETE',
      headers:{
        authorization: this._key,
        'Content-Type': this._contentType
      }
    })
    .then(res => {
      if (res.ok){
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }




}