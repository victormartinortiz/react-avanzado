/* eslint-disable import/prefer-default-export */
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCardsWithQuery } from '../containers/ListOfPhotoCardsWithQuery';

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Petgram</title>
        <meta
          name='description'
          content='Las fotos mas bonitas de mascotas domesticas'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </>
  );
};

export const Home = memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
})
