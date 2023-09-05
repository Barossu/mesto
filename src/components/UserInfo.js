export default class UserInfo{
  constructor({profileNameSelector, profileInfoSelector}){
    this._profileName = document.querySelector(profileNameSelector);
    this._profileInfo = document.querySelector(profileInfoSelector);
  }

  getUserInfo(){
    this._userInfo = {name: this._profileName.textContent, info: this._profileInfo.textContent};
    return this._userInfo
  };

  setUserInfo(inputName, inputInfo){  
    this._profileName.textContent = inputName.value;
    this._profileInfo.textContent = inputInfo.value;
  };
}