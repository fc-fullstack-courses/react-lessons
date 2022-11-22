import React from 'react';
import { ProductContext } from '../../../App';

const SomeArticle = (props) => {
  // const styles = {
  //   background: theme ? 'red': 'black'
  // }

  const renderFunc = (contextValue) => (
    // <article style={styles}>
    <article>
      <h5>Article</h5>
      <div>{JSON.stringify(contextValue)}</div>
    </article>
  );

  return <ProductContext.Consumer>{renderFunc}</ProductContext.Consumer>;
};

export default SomeArticle;
