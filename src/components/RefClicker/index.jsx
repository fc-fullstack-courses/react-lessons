import { useClicker } from 'hooks';
import React, { useRef } from 'react';

const RefClicker = (props) => {
  const elemRef = useRef();
  const clicks = useClicker();

  return (
    <div id="test">
      <h1>Clicks: {clicks}</h1>
      <div
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
