/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { Category } from '../Category';

import { List, Item } from './styles';

export const ListOfCategories = (params) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    window.fetch('https://petgram-server-victor-fnrx15a1n.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response);
      })
  }, []);

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  )
};
