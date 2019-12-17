/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { PhotoCard } from '../components/PhotoCard';
import { Loader } from '../components/Loader';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
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
  if (error) throw new Error('loading data error in PhotoCardWithQuery...');
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProps }
  </Query>
);
