/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { Loader } from '../Loader';
import { useFetch } from '../../hooks/useFetch';

import { List, Item } from './styles';

const API_URL = 'https://petgram-server-victor-fnrx15a1n.now.sh/categories';

export const ListOfCategories = params => {
  const [data, loading] = useFetch(API_URL);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading ?
        [1, 2, 3, 4, 5, 6].map(id =>
          (<Item key={id}>
            <Loader />
          </Item>)
        ) :
        data.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
