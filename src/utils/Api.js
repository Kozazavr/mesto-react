class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  getProfileData() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }
  
  getInitialData() {
    return Promise.all([this.getProfileData(), this.getCards()]);
  }

  addCard(data) {
    return fetch(`${this._url}cards`, {
      method: "POST", 
      headers: this._headers,
      body: JSON.stringify(data),
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  editProfile(data) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH", 
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  setLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  unLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  editAvatar(avatar) {  
    return fetch(`${this._url}users/me/avatar`,  {
      method: "PATCH", 
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      })})
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
          return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}
  
const api = new Api({  
  url: "https://mesto.nomoreparties.co/v1/cohort-18/",
  headers: {
    "authorization": "314f493f-d410-4af8-924a-085e955b4269",
    "content-type": "application/json"
  }
}); 

export default api;
