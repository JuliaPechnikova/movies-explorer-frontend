import './App.css';
//import Footer from '../Footer.js';
///import Header from '../Header.js';
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
            <Main/>
          }/>
          <Route path="/movies" element = {
            <Movies/>
          } />
          <Route path="/saved-movies" element = {
            <SavedMovies/>
          } />
          <Route path="/profile" element = {
            <Profile/>
          } />
          <Route path="/signup" element = {
            <Register/>
          } />
          <Route path="/signin" element = {
            <Login/>
          } />
        </Routes>
    </div>
  );
}

export default App;
