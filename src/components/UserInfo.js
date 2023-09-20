export default class UserInfo{
  constructor({profileNameSelector, profileInfoSelector, profileAvatarSelector}){
    this._profileName = document.querySelector(profileNameSelector);
    this._profileInfo = document.querySelector(profileInfoSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo(){
    return {name: this._profileName.textContent, info: this._profileInfo.textContent};
  };

  setUserInfo(inputName, inputInfo){  
    this._profileName.textContent = inputName;
    this._profileInfo.textContent = inputInfo;
  };

  setUserAvatar(avatarLink){
    this._profileAvatar.setAttribute('src', avatarLink)
  }
}