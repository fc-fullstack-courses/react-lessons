import { useClicker } from 'hooks';
import React, { useEffect, useRef } from 'react';

const RefClicker = (props) => {
  const elemRef = useRef();
  const clicks = useClicker(elemRef);
  const inputRef = useRef();
  const prevClicks = useRef(clicks);
  const renders = useRef(1);

  useEffect(()=> {
    renders.current = renders.current + 1
  })

  useEffect(() => {
    prevClicks.current = clicks;
  }, [clicks]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div id="test">
      <h1>Clicks: {clicks}</h1>
      <p>Prev clicks {prevClicks.current}</p>
      <p>Renders {renders.current}</p>
      <input ref={inputRef} type="text" />
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
