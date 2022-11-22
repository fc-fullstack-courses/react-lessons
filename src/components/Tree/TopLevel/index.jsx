import React from 'react';
import MiddleLevel from '../MiddleLevel';

const TopLevel = (props) => {
  return (
    <div>
      <h2>TopLevel</h2>
      <MiddleLevel  product={props.product} />
    </div>
  );
};

export default TopLevel;
