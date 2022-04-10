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
import { Route, Routes, useNavigate } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();

  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [searchedMoviesError, setSearchedMoviesError] = React.useState(false);
  const [apiError, setApiError] = React.useState(false);
  const [apiSuccess, setApiSuccess] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({name: ''});
  const [email, setEmail] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);  
  const [preloader, setPreloader] = React.useState(true);
  const [shortMovies, setShortMovies] = React.useState(false);

  React.useEffect(() => {
    tokenCheck();
    const moviesLocal = JSON.parse(localStorage.getItem('movies') || '[]');
    setMovies(moviesLocal);
    const searchedMoviesLocal = JSON.parse(localStorage.getItem('searchedMovies') || '[]');
    setSearchedMovies(searchedMoviesLocal);
    const savedMoviesLocal = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    setSavedMovies(savedMoviesLocal);
    const profileDataLocal = JSON.parse(localStorage.getItem('profileData') || '[]');
    setCurrentUser(profileDataLocal);
  }, []);

  React.useEffect(() => {
    if (loggedIn===true) {
      api.getUserProfile()
      .then((profileData) => {
        setCurrentUser(profileData);
        localStorage.setItem('profileData', JSON.stringify(profileData));
      })
      .catch(err => console.log(`Ошибка инициализации пользователя: ${err}`));
    }
  }, [loggedIn]);


  React.useEffect(() => {
    if (loggedIn===true) {
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

  function handleClickExit(){
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  React.useEffect(() => {
    if (loggedIn===true) {
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
  }, [loggedIn]);

  function handleUpdateSearch(search, checkedState){
    if (search !== null) {
      const searchMovies = movies.filter((el) => el.nameRU.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      setSearchedMovies(searchMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(searchMovies));
      if (checkedState) {
        const queryShort = searchMovies.filter((el) => el.duration < 40);
        setSearchedMovies(queryShort);
        localStorage.setItem('searchedMovies', JSON.stringify(queryShort));
      }
    }
    else {
      setSearchedMovies([]);
      localStorage.setItem('searchedMovies', JSON.stringify([]));
    }
  }

  function handleSaveCard(card) {
    const isSaved = savedMovies.some(id => id.movieId === card.id);
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
          navigate('/movies');
          setEmail(res.email);
        }
      })
      .catch(err => {
        return console.log(`Неудалось проверить токен: ${err}`)}
      ); 
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
                  searchedMovies={searchedMovies} 
                  searchedMoviesError={searchedMoviesError} 
                  unsortedMovies={movies} 
                  onUpdateSearch={handleUpdateSearch}
                  onSaveCard={handleSaveCard}
                  savedMovies={savedMovies}
                  preloader={preloader}
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
                  searchedMovies={searchedMovies} 
                  searchedMoviesError={searchedMoviesError}
                  onUpdateSearch={handleUpdateSearch}
                  savedMovies={savedMovies}
                  unsortedMovies={movies} 
                  onDeleteCard={handleDeleteCard}
                  preloader={preloader}
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
