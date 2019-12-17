/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards';
import { Loader } from '../components/Loader';

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProps = ({ loading, error, data }) => {
  if (loading) return <Loader />;
  if (error) throw new Error('loading data error in ListOfPhotoCardsWithQuery...');
  return <ListOfPhotoCardsComponent data={data} />;
};

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    { renderProps }
  </Query>
);
