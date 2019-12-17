/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCardsWithQuery } from './containers/ListOfPhotoCardsWithQuery';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { Logo } from './components/Logo';

import { GlobalStyle } from './components/styles/GlobalStyles';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCardsWithQuery categoryId={3} />
        </>
      )}
    </>
  );
};
