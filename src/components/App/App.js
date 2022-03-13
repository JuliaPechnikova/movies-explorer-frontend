import './App.css';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
//import Navigation from './Navigation.js';


import React from 'react';
import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element = {
            <>
              <Header/>
              <Main/>
              <Footer/>
            </>
          }/>
          <Route path="/movies" element = {
            <>
              <Header/>
              <Movies/>
              <Footer/>
            </>
          } />
          <Route path="/saved-movies" element = {
            <>
              <Header/>
              <SavedMovies/>
              <Footer/>
            </>
          } />
          <Route path="/profile" element = {
            <>
              <Header/>
              <Profile/>
              <Footer/>
            </>
          } />
          <Route path="/signup" element = {
            <>
              <Header/>
              <Register/>
              <Footer/>
            </>
          } />
          <Route path="/signin" element = {
            <>
              <Header/>
              <Login/>
              <Footer/>
            </>
          } />
        </Routes>
    </div>
  );
}

export default App;
