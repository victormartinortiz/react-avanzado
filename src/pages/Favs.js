/* eslint-disable import/prefer-default-export */
import React from 'react';
import { FavsWithQuery } from '../containers/GetFavWithQuery';
import { Layout } from '../components/Layout';

export default () => (
  <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
);
