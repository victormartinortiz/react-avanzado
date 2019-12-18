/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Router } from '@reach/router';

import { NavBar } from './components/NavBar';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { GlobalStyle } from './components/styles/GlobalStyles';

const UserLogged = ({ children }) => {
  return children({ isAuth: true });
};

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <User path='/user' />
              <Favs path='/fav' />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path='/user' />
              <NotRegisteredUser path='/fav' />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  );
};
