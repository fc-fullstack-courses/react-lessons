import React from 'react';
import SomeArticle from '../SomeArticle/SomeArticleHooks';

const BottomLevel = (props) => {
  return (
    <div>
      <h4>BottomLevel</h4>
      <SomeArticle test="test prop"/>
    </div>
  );
};

export default BottomLevel;
