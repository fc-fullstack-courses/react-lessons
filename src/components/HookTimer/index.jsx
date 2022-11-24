import React, { useState } from 'react';

const Timer = (props) => {
  // const [state, setState] = useState({ count: 0, startingNumber: 0 });
  const [startingNumber, setStartingNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    // setState({ ...state, startingNumber: value });
    setStartingNumber(value);
  };

  return (
    <div>
      <p>Starting number : {startingNumber}</p>
      <p>Current number : {currentNumber}</p>
      <input type="text" value={startingNumber} onChange={handleChange} />
      <button>Start Timer</button>
      <button>Stop Timer</button>
    </div>
  );
};

export default Timer;
