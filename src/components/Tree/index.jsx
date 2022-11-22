import React from 'react';
import TopLevel from './TopLevel';

const Tree = (props) => {
  return (
    <div>
      <h1>Tree</h1>
      <TopLevel product={props.product} />
    </div>
  );
};

export default Tree;
