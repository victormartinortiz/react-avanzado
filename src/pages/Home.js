/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCardsWithQuery } from '../containers/ListOfPhotoCardsWithQuery';

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </>
  );
};
