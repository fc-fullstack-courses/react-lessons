import React from 'react';

const SomeArticle = ({ product }) => {
  return (
    <article>
      <h5>Article</h5>
      <div>{JSON.stringify(product)}</div>
    </article>
  );
};

export default SomeArticle;
