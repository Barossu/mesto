import { nameInput, jobInput } from './constants.js'

export default class UserInfo{
  constructor({name, info}){
    this._profileName = document.querySelector(name);
    this._profileInfo = document.querySelector(info);
  }

  getUserInfo(){
    this._userInfo = {name: this._profileName.textContent, info: this._profileInfo.textContent};
    return this._userInfo
  };

  setUserInfo(){  
    this._profileName.textContent = nameInput.value;
    this._profileInfo.textContent = jobInput.value;
  };
}