import React from 'react';
import SomeArticle from '../SomeArticle';

const BottomLevel = (props) => {
  return (
    <div>
      <h4>BottomLevel</h4>
      <SomeArticle  product={props.product}/>
    </div>
  );
};

export default BottomLevel;
