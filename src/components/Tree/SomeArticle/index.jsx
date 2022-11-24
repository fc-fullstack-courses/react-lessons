import React from 'react';
import { withProduct, withTheme } from '../../../hocs';
import CONSTANTS from '../../../constants';
const { THEMES } = CONSTANTS;

const SomeArticle = (props) => {
  const { product, theme, onClick } = props;

  const styles = {
    backgroundColor: theme === THEMES.LIGHT ? 'lightgray' : '#444444',
    color: theme === THEMES.LIGHT ? 'black' : 'white',
  };
  return (
    <article style={styles}>
      <h5>Article</h5>
      <button onClick={onClick}>Change Theme</button>
      <div>{JSON.stringify(product)}</div>
    </article>
  );
};

// const SomeArticleWithProduct = withProduct(SomeArticle);
// const SomeArticleWithAll = withTheme(SomeArticleWithProduct);

const SomeArticleWithAll = withProduct(withTheme(SomeArticle));

export default SomeArticleWithAll;
