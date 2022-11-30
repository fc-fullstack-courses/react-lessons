import { useEffect, useState } from 'react';

export default function useClicker(elemRef) {
  const [clicks, setClicks] = useState(0);
  const clicksListener = () => setClicks((clicksState) => clicksState + 1);

  useEffect(() => {
    const elem = elemRef.current;

    if (elem) {
      elem.addEventListener('click', clicksListener);
    }
    return () => {
      if (elem) {
        elem.removeEventListener('click', clicksListener);
      }
    };
  }, [elemRef]);

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
