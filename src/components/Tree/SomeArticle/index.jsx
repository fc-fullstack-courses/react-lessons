import React from 'react';
import { ProductContext, ThemeContext } from '../../../contexts';
import CONSTANTS from '../../../constants';
const { THEMES } = CONSTANTS;

const SomeArticle = (props) => {
  const { product } = props;
  return (
    <article>
      <h5>Article</h5>
      <button onClick={() => {}}>Change Theme</button>
      <div>{JSON.stringify(product)}</div>
    </article>
  );
};

// function SomeArticleWithProduct({ theme, onClick }) {
//   return (
//     <ProductContext.Consumer>
//       {(product) => {
//         const styles = {
//           backgroundColor: theme === THEMES.LIGHT ? 'lightgray' : '#444444',
//           color: theme === THEMES.LIGHT ? 'black' : 'white',
//         };

//         return (
//           <article style={styles}>
//             <h5>Article</h5>
//             <button onClick={onClick}>Change Theme</button>
//             <div>{JSON.stringify(product)}</div>
//           </article>
//         );
//       }}
//     </ProductContext.Consumer>
//   );
// }

function withProduct(Component) {
  function NewComponent(props) {
    return (
      <ProductContext.Consumer>
        {(product) => <Component product={product} />}
      </ProductContext.Consumer>
    );
  }

  return NewComponent;
}

const SomeArticleWithProduct = withProduct(SomeArticle);

export default SomeArticleWithProduct;
