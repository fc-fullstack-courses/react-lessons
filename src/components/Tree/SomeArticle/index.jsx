import React from 'react';
import { ProductContext, ThemeContext } from '../../../contexts';
import CONSTANTS from '../../../constants'; 
const { THEMES } = CONSTANTS;

const SomeArticle = (props) => {
  // const styles = {
  //   background: theme ? 'red': 'black'
  // }

  return (
    <ThemeContext.Consumer>
      {([theme, onClick]) => {
        const styles = {
          backgroundColor: theme === THEMES.LIGHT ? 'lightgray' : '#444444',
          color: theme === THEMES.LIGHT ? 'black' : 'white',
        };

        return (
          <ProductContext.Consumer>
            {(product) => (
              <article style={styles}>
                <h5>Article</h5>
                <button onClick={onClick}>Change Theme</button>
                <div>{JSON.stringify(product)}</div>
              </article>
            )}
          </ProductContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default SomeArticle;
