import React from 'react';
import './App.css';
import Timer from 'components/HookTimer';
import Tree from 'components/Tree';
import { ProductContext, ThemeContext } from 'contexts';

function App() {
  return (
    <>
      <ThemeContext.Provider value={'dark'}>
        <ProductContext.Provider value={{ id: 10, name: 'Prod 1' }}>
          <Timer />
          <Tree />
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
