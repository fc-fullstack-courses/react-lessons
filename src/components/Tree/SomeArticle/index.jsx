import React from 'react';
import { ProductContext, ThemeContext, THEMES } from '../../../App';

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
            {(contextValue) => (
              <article style={styles}>
                <h5>Article</h5>
                <button onClick={onClick}>Change Theme</button>
                <div>{JSON.stringify(contextValue)}</div>
              </article>
            )}
          </ProductContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default SomeArticle;
