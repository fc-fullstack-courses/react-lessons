import { useEffect, useState } from 'react';
/**
 *
 * @param {Function} getData
 */
export function useData(getData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = () => {
    setIsLoading(true);

    getData()
      .then((loadedData) => {
        setData(loadedData);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return { data, isLoading, error };
}

/*
  Создайте хук useClicker
  обработчик на клики вешайте на document
  
*/