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
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="app">
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
            </>
          } />
          <Route path="/signup" element = {
            <Register/>
          } />
          <Route path="/signin" element = {
            <Login/>
          } />
          <Route exact path="*" element = {
            <NotFound/>
          } />
        </Routes>
    </div>
  );
}

export default App;
