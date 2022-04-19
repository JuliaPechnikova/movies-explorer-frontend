import './App.css';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import NotFound from '../NotFound/NotFound';
import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {SHORT_FILM_DURATION} from '../../utils/const';

function App() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] =React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  const [searchedMoviesError, setSearchedMoviesError] = React.useState(false);
  const [apiError, setApiError] = React.useState(false);
  const [apiSuccess, setApiSuccess] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name: ''});
  const [email, setEmail] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(null);  
  const [preloader, setPreloader] = React.useState(true);
  const [checkedState, setCheckedState] = React.useState(false);
  const [query, setQuery] = React.useState("");


  React.useEffect(() => {
    setTimeout(() => {
      tokenCheck();
    }, 100);
    const checkedStateLocal = JSON.parse(localStorage.getItem('checkedState') || 'false');
    setCheckedState(checkedStateLocal);
    const queryLocal = JSON.parse(localStorage.getItem('query'));
    setQuery(queryLocal);
    const moviesLocal = JSON.parse(localStorage.getItem('movies') || '[]');
    setMovies(moviesLocal);
    const savedMoviesLocal = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    setSavedMovies(savedMoviesLocal);
    const filteredMoviesLocal = JSON.parse(localStorage.getItem('filteredMovies') || '[]');
    setFilteredMovies(filteredMoviesLocal);
    const profileDataLocal = JSON.parse(localStorage.getItem('profileData') || '[]');
    setCurrentUser(profileDataLocal);
  }, []);

  React.useEffect(() => {
    const checkedStateLocal = JSON.parse(localStorage.getItem('checkedState') || 'false');
    setCheckedState(checkedStateLocal);
    const queryLocal = JSON.parse(localStorage.getItem('query'));
    setQuery(queryLocal);
  }, [path]);

  React.useEffect(() => {
    if (loggedIn) {
      api.getUserProfile()
      .then((profileData) => {
        setCurrentUser(profileData);
        localStorage.setItem('profileData', JSON.stringify(profileData));
      })
      .catch(err => console.log(`Ошибка инициализации пользователя: ${err}`));
    }
  }, [loggedIn]);


  React.useEffect(() => {
    if (loggedIn) {
      setPreloader(true);
      moviesApi.getInitialMovies()
      .then((movies) => {
        setPreloader(false);
        setMovies(movies);
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch(
        err => {console.log(`Ошибка инициализации фильмов: ${err}`);
        setSearchedMoviesError(true);
      });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    setFilteredSavedMovies(filterSavedCards());
  }, [savedMovies]);

  function handleClickExit(){
    localStorage.clear();
    setLoggedIn(false);
  }

  React.useEffect(() => {
    if (loggedIn) {
      setPreloader(true);
      api.getSavedCards()
      .then((movies) => {
        setPreloader(false);
        setSavedMovies(movies);
        localStorage.setItem('savedMovies', JSON.stringify(movies));
      })
      .catch(
        err => {console.log(`Ошибка инициализации сохраненных фильмов: ${err}`);
      });
    }
  }, [loggedIn, movies]);

  function handleUpdateSearch(search, checkedState, path){
    setPreloader(true);
    setTimeout(() => {
    if (search !== "") {
      if (path === "/movies") {
        const searchMovies = movies.filter((el) => el.nameRU.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        setPreloader(false);
        setFilteredMovies(searchMovies);
        localStorage.setItem('filteredMovies', JSON.stringify(searchMovies));
        localStorage.setItem('query', JSON.stringify(search));
        checkQueryShort(checkedState, searchMovies, path);
      }
      else if (path === "/saved-movies") {
        setPreloader(false);
        const cards = filterSavedCards();
        const searchMovies = cards.filter((el) => el.nameRU.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        setFilteredSavedMovies(searchMovies);
        checkQueryShort(checkedState, searchMovies, path);
      }
    }
    else {
      if (path === "/movies") {
        setPreloader(false);
        setFilteredMovies([]);
        localStorage.setItem('filteredMovies', JSON.stringify([]));
        localStorage.setItem('query', JSON.stringify(search));
      }
      else if (path === "/saved-movies") {
      const cards = filterSavedCards();
        setPreloader(false);
        setFilteredSavedMovies(cards);
        checkQueryShort(checkedState, filteredSavedMovies, path);
      }
    }}, 500);
  }

  function filterSavedCards () {
    const cards = movies.map(c => {
      const [cards_filtered] = savedMovies.filter(m => 
        c.id === m.movieId && m.owner === currentUser._id
      )
      return cards_filtered}
    ).filter(card => card !== undefined);
    return cards;
  }

  function checkQueryShort(checkedState, searchMovies, path){
    if (checkedState) {
      const queryShort = searchMovies.filter((el) => el.duration < SHORT_FILM_DURATION);
      if (path === "/movies") {
        setFilteredMovies(queryShort);
        localStorage.setItem('filteredMovies', JSON.stringify(queryShort));
        localStorage.setItem('checkedState', JSON.stringify(true));
      }
      else if (path === "/saved-movies") {
        setFilteredSavedMovies(queryShort);
      }
    }
    else {
      localStorage.setItem('checkedState', JSON.stringify(false));
    }
  }

  function handleSaveCard(card) {
    const isSaved = savedMovies.some(id => id.movieId === card.id && id.owner === currentUser._id);
    const [savedMoviesId] = savedMovies.filter(id => id.movieId === card.id);

    if (isSaved === false) {
      api.createMoviesCard(card, !isSaved)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, newMovie]));
      })
      .catch(err => console.log(`Ошибка добавления карточки: ${err}`));
    }
    else {
      api.deleteMoviesCard(savedMoviesId._id, isSaved)
      .then(() => {
        setSavedMovies(savedMovies.filter(id => id.movieId !== card.id));
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies.filter(id => id.movieId !== card.id)));
      })
      .catch(err => console.log(`Ошибка удаления карточки: ${err}`));
    }
  }

  function handleDeleteCard(card){
    api.deleteMoviesCard(card._id)
    .then(() => {
      setSavedMovies(savedMovies.filter(c => c._id !== card._id));
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies.filter(c => c._id !== card._id)));
    })
    .catch(err => console.log(`Ошибка удаления карточки: ${err}`));
  }

  function handleUpdateUserRegister(userAuth){
    api.register(userAuth)
    .then((res) => {
      if(res){
        handleUpdateUserLogin(userAuth);
      } else {
        console.log("Что-то пошло не так!");
      }
    })
    .catch(err => {
      setApiError(true);
      return console.log(`Ошибка регистрации: ${err}`);
    });
  }

  function handleUpdateUserLogin(userAuth){
    api.auth(userAuth)
    .then((authData) => {
      if (authData.token){
        localStorage.setItem('token', authData.token);
        setLoggedIn(true);
        setEmail(userAuth.login);
        navigate('/movies');
      }
    })
    .catch(err => {
      setApiError(true);
      return console.log(`Ошибка авторизации: ${err}`);
    });
  }

  function handleUpdateUserProfile(userData){
    api.setUserProfile(userData)
    .then((userData) => {
      setCurrentUser(userData);
      setApiSuccess(true);
    })
    .catch(err => {
      setApiError(true);
      console.log(`Ошибка изменения параметров профиля: ${err}`)
    });
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token){
      api.emailInfo(token).then((res) => {
        if (res){
          setLoggedIn(true);
          setEmail(res.email);
        }
      })
      .catch(err => {
        setLoggedIn(false)
        console.log(`Неудалось проверить токен: ${err}`)}
      )
    } else {
      setLoggedIn(false);
    }
  } 

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
            <Route path="/" element = {
              <>
                <Header loggedIn={loggedIn}/>
                <Main/>
                <Footer/>
              </>
            }/>
            <Route path="/movies" element = {
              <>
                <Header/>
                <ProtectedRoute 
                  path="/movies"
                  loggedIn={loggedIn}
                  component={Movies}
                  searchedMovies={filteredMovies} 
                  searchedMoviesError={searchedMoviesError} 
                  onUpdateSearch={handleUpdateSearch}
                  onSaveCard={handleSaveCard}
                  savedMovies={savedMovies}
                  preloader={preloader}
                  checkedState={checkedState}
                  query={query}
                />
                <Footer/>
              </>
            } />
            <Route path="/saved-movies" element = {
              <>
                <Header/>
                <ProtectedRoute 
                  path="/saved-movies"
                  loggedIn={loggedIn}
                  component={SavedMovies}
                  searchedMovies={filteredSavedMovies} 
                  searchedMoviesError={searchedMoviesError}
                  onUpdateSearch={handleUpdateSearch}
                  onDeleteCard={handleDeleteCard}
                  savedMovies={savedMovies}
                  preloader={preloader}
                  checkedState={false}
                  query={""}
                />
                <Footer/>
              </>
            } />
            <Route path="/profile" element = {
              <>
                <Header/>
                <ProtectedRoute
                  path="/profile"
                  component={Profile}
                  loggedIn={loggedIn}
                  email={email}
                  onClick={handleClickExit}
                  apiError={apiError}
                  apiSuccess={apiSuccess}
                  setApiError={setApiError}
                  setApiSuccess={setApiSuccess}
                  onUpdateUserProfile={handleUpdateUserProfile}
                />
              </>
            } />
            <Route path="/signup" element = {
              <Register onUpdateUserAuth={handleUpdateUserRegister} registerError={apiError} setApiError={setApiError}/>
            } />
            <Route path="/signin" element = {
              <Login onUpdateUserAuth={handleUpdateUserLogin} registerError={apiError} setApiError={setApiError}/>
            } />
            <Route exact path="*" element = {
              <NotFound/>
            } />
          </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
