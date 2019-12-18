/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button type='button' onClick={onClick}>
      <Icon size='32px' /> {likes} !likes
    </Button>
  );
};