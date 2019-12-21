/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import React, { useContext, Suspense, lazy } from 'react';
import { Router, Redirect } from '@reach/router';

import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Logo } from './components/Logo';
import { Loader } from './components/Loader';
import { GlobalStyle } from './components/styles/GlobalStyles';

import { Context } from './Context';

const User = lazy(() => import('./pages/User'))
const Favs = lazy(() => import('./pages/Favs'))
const Detail = lazy(() => import('./pages/Detail'))
const NotRegisteredUser = lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {!isAuth && <Redirect from='/fav' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='/fav' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  );
};
