import { useEffect, useState } from 'react';

export const data = 1234;

/**
 *
 * @param {Function} getData
 */
export default function useData(getData) {
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
