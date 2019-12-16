/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCard } from './components/ListOfPhotoCard';
import { Logo } from './components/Logo';

import { GlobalStyle } from './components/styles/GlobalStyles';

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>

);
