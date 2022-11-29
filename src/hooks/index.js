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
export function useClicker() {
  const [clicks, setClicks] = useState(0);
  const clicksListener = () => setClicks((clicksState) => clicksState + 1);

  useEffect(() => {
    document.addEventListener('click', clicksListener);
    return () => {
      document.removeEventListener('click', clicksListener);
    };
  }, []);

  // неоптимизированная версия
  // useEffect(() => {
  //   const clicksListener = () => setClicks(clicks + 1);
  //   document.addEventListener('click', clicksListener);
  //   return () => {
  //     document.removeEventListener('click', clicksListener);
  //   };
  // }, [clicks]);

  return clicks;
}