/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  async function fetchUrl() {
    try {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
};
