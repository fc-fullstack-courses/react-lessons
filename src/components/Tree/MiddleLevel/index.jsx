import React from 'react';
import BottomLevel from '../BottomLevel';

const MiddleLevel = (props) => {
  return (
    <div>
      <h3>Middle level</h3>
      <BottomLevel  product={props.product}/>
    </div>
  );
};

export default MiddleLevel;
