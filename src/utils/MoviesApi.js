class MoviesApi {
  constructor(content) {
    this._baseUrl = content.baseUrl;
  }

  _checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialMovies(){
    return fetch(`${this._baseUrl}`, {
      method: 'GET'
    })
    .then(this._checkResponse)
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/'
});

export default moviesApi;
