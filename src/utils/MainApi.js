class Api {
  constructor(content) {
    this._baseUrl = content.baseUrl;
  }

  _setHeaders(){
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  _checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getSavedCards(){
    return fetch(`${this._baseUrl}movies`, {
      method: 'GET',
      headers: this._setHeaders()
    })
    .then(this._checkResponse)
  }

  setUserProfile(profileName, profileDescription){
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._setHeaders(),
      body: JSON.stringify({
        name: profileName,
        about: profileDescription
      })
    })
    .then(this._checkResponse)
  }

  getUserProfile(){
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._setHeaders(),
    })
    .then(this._checkResponse)
  }

  createMoviesCard(card) {
    const urlTumbnail = `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`;
    const urlImage = `https://api.nomoreparties.co${card.image.url}`;
    const nameEN = card.nameEN === "" ? card.nameRU : card.nameEN;
    const country = card.country === null ? "Undefined" : card.country;

    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: this._setHeaders(),
      body: JSON.stringify({
        nameRU: card.nameRU,
        nameEN: nameEN,
        trailerLink: card.trailerLink,
        thumbnail: urlTumbnail,
        image: urlImage,
        country: country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        movieId: card.id
      })
    })
    .then(this._checkResponse)
  }

  deleteMoviesCard(cardID) {
    return fetch(`${this._baseUrl}movies/${cardID}`, {
      method: 'DELETE',
      headers: this._setHeaders(),
      body: JSON.stringify({
        movieId: cardID
      })
    })
    .then(this._checkResponse)
  }

  register(userData) {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: userData.password,
        email: userData.login,
        name: userData.name
      })
    })
    .then(this._checkResponse)
  }

  auth(userData) {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: userData.password,
        email: userData.login
      })
    })
    .then(this._checkResponse)
  }

  emailInfo(jwt) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${jwt}`
      }
    })
    .then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001/'
});

export default api;