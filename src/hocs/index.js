import { ProductContext, ThemeContext } from "../contexts";

export function withProduct(Component) {
  function NewComponent(props) {
    return (
      <ProductContext.Consumer>
        {(product) => <Component product={product} {...props}/>}
      </ProductContext.Consumer>
    );
  }

  return NewComponent;
}

export const withTheme = (Component) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, onClick]) => <Component theme={theme} onClick={onClick} {...props}/>}
    </ThemeContext.Consumer>
  );