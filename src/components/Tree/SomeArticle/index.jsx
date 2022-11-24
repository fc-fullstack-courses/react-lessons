import React from 'react';
import { ProductContext, ThemeContext } from '../../../contexts';
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


function withProduct(Component) {
  function NewComponent(props) {
    return (
      <ProductContext.Consumer>
        {(product) => <Component product={product} {...props}/>}
      </ProductContext.Consumer>
    );
  }

  return NewComponent;
}

const withTheme = (Component) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, onClick]) => <Component theme={theme} onClick={onClick} {...props}/>}
    </ThemeContext.Consumer>
  );

// const SomeArticleWithProduct = withProduct(SomeArticle);
// const SomeArticleWithAll = withTheme(SomeArticleWithProduct);

const SomeArticleWithAll = withProduct(withTheme(SomeArticle));

export default SomeArticleWithAll;
