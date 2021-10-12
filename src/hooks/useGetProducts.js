import { useState, useEffect } from 'react';
import useEndpoint from './useEndpoint';
import axios from 'axios';

const useGetProducts = (product_type) => {
  // Hooks
  // -- state
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // -- auth, route logic
  const { consumer_key, consumer_secret, route } = useEndpoint(product_type);

  // --- side effects
  useEffect(() => {
    // cleanup go on
    let mounted = true;
    axios
      .get(route, {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + btoa(`${consumer_key}:${consumer_secret}`),
        },
      })
      .then((data) => {
        if (mounted) {
          setProducts(data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => (mounted = false);
  }, [consumer_key, consumer_secret, route]);

  return { products, isLoading, error };
};

export default useGetProducts;
