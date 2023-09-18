export default class UserInfo{
  constructor({profileNameSelector, profileInfoSelector}){
    this._profileName = document.querySelector(profileNameSelector);
    this._profileInfo = document.querySelector(profileInfoSelector);
  }

  getUserInfo(){
    return {name: this._profileName.textContent, info: this._profileInfo.textContent};
  };

  setUserInfo(inputName, inputInfo){  
    this._profileName.textContent = inputName;
    this._profileInfo.textContent = inputInfo;
  };
}