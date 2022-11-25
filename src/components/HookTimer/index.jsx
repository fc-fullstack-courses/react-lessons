import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [startingNumber, setStartingNumber] = useState(10);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // загрузка пользователя
  useEffect(function effect() {
    // console.log('useEffect');
    console.log('did mount + did update');

    // let intervalId = setInterval(tick, 1000);
    // document.addEventListener('click', handleClick);

    return function cleanup() {
      console.log('Will unmount');
      // clearInterval(intervalId);
      // document.removeEventListener('click', handleClick);
    };
  });

  // интервал
  useEffect(() => {
    console.log(currentNumber);
  }, [currentNumber, startingNumber]);

  useEffect(() => {
    console.log('Did mount ?');
    return () => {};
  }, []);

  const handleClick = () => {
    console.log('click');
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    setStartingNumber(+value);
  };

  const start = () => {
    if (!isStarted) {
      setIsStarted(true);
      setCurrentNumber(startingNumber);
      const intervalId = setInterval(tick, 1000);
      setIntervalId(intervalId);
    }
  };

  const stop = () => {
    clearInterval(intervalId);
    setIsStarted(false);
  };

  const tick = () => {
    setCurrentNumber((oldCurrentNumber) => oldCurrentNumber - 1);
  };

  return (
    <div>
      <p>Starting number : {startingNumber}</p>
      <p>Current number : {currentNumber}</p>
      <input type="text" value={startingNumber} onChange={handleChange} />
      <button onClick={start}>Start Timer</button>
      <button onClick={stop}>Stop Timer</button>
    </div>
  );
};

export default Timer;
