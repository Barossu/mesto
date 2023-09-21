(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseURL=e.baseURL,this._key=e.headers.authorization,this._contentType=e.headers["Content-Type"]}var n,r;return n=t,(r=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseURL,"/cards"),{method:"GET",headers:{authorization:this._key}}).then((function(e){return t._getResponseData(e)}))}},{key:"postNewCard",value:function(t){var e=this;return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:{authorization:this._key,"Content-Type":this._contentType},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._getResponseData(t)}))}},{key:"getProfileInfo",value:function(){var t=this;return fetch("".concat(this._baseURL,"/users/me"),{method:"GET",headers:{authorization:this._key}}).then((function(e){return t._getResponseData(e)}))}},{key:"patchProfileInfo",value:function(t,e){var n=this;return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:{authorization:this._key,"Content-Type":this._contentType},body:JSON.stringify({name:t,about:e})}).then((function(t){return n._getResponseData(t)}))}},{key:"patchProfileAvatar",value:function(t){var e=this;return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._key,"Content-Type":this._contentType},body:JSON.stringify({avatar:t.link})}).then((function(t){return e._getResponseData(t)}))}},{key:"toggleLike",value:function(t,e){var n=this;return fetch("".concat(this._baseURL,"/cards/").concat(t,"/likes"),{method:e?"DELETE":"PUT",headers:{authorization:this._key,"Content-Type":this._contentType}}).then((function(t){return n._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseURL,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._key,"Content-Type":this._contentType}}).then((function(t){return e._getResponseData(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o,i,u,a){var c=e.link,l=e.name,s=e.likes,f=e._id,p=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._image=c,this._name=l,this._likesOnCard=s,this._cardId=f,this._templateSelector=n,this._handleImageClick=r,this._setLikes=o,this._checkIdOnLike=i,this._cardOwner=p,this._deleteCard=u,this._userId=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imageElement=this._element.querySelector(".elements__image"),this._likeButton=this._element.querySelector(".elements__like"),this._likesCounter=this._element.querySelector(".elements__likes-counter"),this._trashButton=this._element.querySelector(".elements__remove-button"),this._checkIdOnLike()&&this._likeButton.classList.add("elements__like_active"),this._cardOwner._id!==this._userId&&(this._trashButton.style.display="none"),this._setEventListeners(),this._likesCounter.textContent=this._likesOnCard.length,this._imageElement.src=this._image,this._imageElement.alt="Изображение: ".concat(this._name),this._element.querySelector(".elements__place").textContent=this._name,this._element}},{key:"_openImagePopup",value:function(){this._handleImageClick(this._name,this._image)}},{key:"updateLikes",value:function(t){this._likeButton.classList.toggle("elements__like_active"),this._likesCounter.textContent=t.likes.length}},{key:"_toggleLike",value:function(){this._likeButton.classList.contains("elements__like_active")?this._setLikes(this._cardId,!0):this._setLikes(this._cardId,!1)}},{key:"delete",value:function(){this._element.remove(),this._element=null}},{key:"_handleDeleteCard",value:function(){this._deleteCard(this)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._toggleLike()})),this._trashButton.addEventListener("click",(function(){t._handleDeleteCard()})),this._imageElement.addEventListener("click",(function(){t._openImagePopup()}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"prependItem",value:function(t){this._container.prepend(t)}},{key:"appendItem",value:function(t){this._container.append(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"renderItemWithRenderer",value:function(t){this._renderer(t)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"resetErrors",value:function(){var t=this;this._inputList.forEach((function(e){return t._hideInputError(e)}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"enableButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_setEventListener",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_closeByClickOnOverlay",value:function(t){t.target.classList.contains("popup")&&this.close()}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-icon").addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",(function(e){return t._closeByClickOnOverlay(e)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__opened-image"),e._popupText=e._popup.querySelector(".popup__opened-place"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt="Изображение: ".concat(e),this._popupText.textContent=t,b(d(u.prototype),"open",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._popupForm=n._popup.querySelector(".popup__form"),n._popupSubmitButton=n._popupForm.querySelector(".popup__button"),n._oldTextButton=n._popupSubmitButton.textContent,n}return e=u,(n=[{key:"setSubmitButtonText",value:function(t){this._popupSubmitButton.textContent=t}},{key:"setDefaultSubmitButtonText",value:function(){this._popupSubmitButton.textContent=this._oldTextButton}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){return t[e.name]=e.value})),t}},{key:"close",value:function(){w(O(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues())})),w(O(u.prototype),"setEventListeners",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"submitCallback",value:function(t){this._formSubmit=t}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmit()})),L(B(u.prototype),"setEventListeners",this).call(this)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var x=function(){function t(e){var n=e.profileNameSelector,r=e.profileInfoSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileInfo=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,info:this._profileInfo.textContent}}},{key:"setUserInfo",value:function(t,e){this._profileName.textContent=t,this._profileInfo.textContent=e}},{key:"setUserAvatar",value:function(t){this._profileAvatar.setAttribute("src",t)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),A={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},D=document.querySelector(".popup__input_type_name"),U=document.querySelector(".popup__input_type_description"),N=document.querySelector(".profile__edit-button"),z=document.querySelector("#popup-edit-form"),V=document.querySelector("#popup-add-form"),F=document.querySelector(".profile__add-button"),J=document.querySelector(".header__logo"),G=document.querySelector("#popup-edit-avatar-form"),H=document.querySelector(".profile__avatar-button");function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}J.setAttribute("src","bbe2a6eafac19c3d031c.svg");var W=new x({profileNameSelector:".profile__name",profileInfoSelector:".profile__description",profileAvatarSelector:".profile__avatar"}),$=new n({baseURL:"https://mesto.nomoreparties.co/v1/cohort-75",headers:{authorization:"c67093b7-30e8-4ad4-90f8-188ef4c56cb8","Content-Type":"application/json"}}),K="";function Q(t){var e=new i(t,"#template",(function(t,e){return nt.open(t,e)}),(function(t,n){$.toggleLike(t,n).then((function(t){return e.updateLikes(t)})).catch((function(t){return console.log(t)}))}),(function(){return t.likes.some((function(e){return t._id===K}))}),(function(e){tt.open(),tt.submitCallback((function(){$.deleteCard(t._id).then((function(){e.delete(),tt.close()})).catch((function(t){return console.log(t)}))}))}),K);return e.generateCard()}var X=new c({renderer:function(t){var e=Q(t);X.appendItem(e)}},".elements");Promise.all([$.getProfileInfo(),$.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K=o._id,W.setUserAvatar(o.avatar),W.setUserInfo(o.name,o.about),X.renderItems(i)})).catch((function(t){return console.log(t)}));var Y=new j("#popup-add-place",(function(t){Y.setSubmitButtonText("Добавление..."),$.postNewCard(t).then((function(t){var e=Q(t);X.prependItem(e),Y.close()})).catch((function(t){return console.log(t)})).finally((function(){Y.setDefaultSubmitButtonText()}))}));Y.setEventListeners(),F.addEventListener("click",(function(){Y.open(),rt.disableButton(),rt.resetErrors()}));var Z=new j("#popup-edit-profile",(function(t){Z.setSubmitButtonText("Сохранение..."),$.patchProfileInfo(t["name-field"],t["description-field"]).then((function(t){W.setUserInfo(t.name,t.about),Z.close()})).catch((function(t){return console.log(t)})).finally((function(){Z.returnSubmitButtonText()}))}));Z.setEventListeners(),N.addEventListener("click",(function(){Z.open();var t=W.getUserInfo();D.value=t.name,U.value=t.info,ot.resetErrors(),ot.enableButton()}));var tt=new I("#popup-delete");tt.setEventListeners();var et=new j("#popup-avatar",(function(t){et.setSubmitButtonText("Сохранение..."),$.patchProfileAvatar(t).then((function(t){W.setUserAvatar(t.avatar),et.close()})).catch((function(t){return console.log(t)})).finally((function(){et.returnSubmitButtonText()}))}));et.setEventListeners(),H.addEventListener("click",(function(){it.resetErrors(),it.disableButton(),et.open()}));var nt=new S("#popup-card");nt.setEventListeners();var rt=new f(A,V);rt.enableValidation();var ot=new f(A,z);ot.enableValidation();var it=new f(A,G);it.enableValidation()})();