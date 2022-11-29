import { useClicker } from 'hooks';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const RefClicker = (props) => {
  const [value, setValue] = useState('');

  const elemRef = useRef();
  const inputRef = useRef();
  const clicks = useClicker(elemRef);
  const prevClicks = useRef(clicks);
  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  useEffect(() => {
    prevClicks.current = clicks;
  }, [clicks]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  // const handleChange = (e) => setValue(e.target.value);

  const handleChange = useCallback((e) => setValue(e.target.value), []);

  useEffect(() => {
    console.log('handleChange created');
  }, [handleChange]);

  const logValue = () => console.log(`value is ${value}`);

  return (
    <div id="test">
      <h1>Clicks: {clicks}</h1>
      <p>Prev clicks {prevClicks.current}</p>
      <p>Renders {renders.current}</p>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <button onClick={logValue}>Log value</button>
      <div
        ref={elemRef}
        style={{
          width: '300px',
          height: '200px',
          background: 'limegreen',
          margin: '20px',
        }}
      ></div>
    </div>
  );
};

export default RefClicker;
