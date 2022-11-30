import React, { useState } from 'react';
import './App.css';
import HomePage from 'pages/HomePage';
import { ThemeContext } from 'contexts';
import CONSTANTS from 'constants.js';
const { THEMES } = CONSTANTS;

function App() {
  const themeTuple = useState(THEMES.DARK);

  return (
    <ThemeContext.Provider value={themeTuple}>
      <HomePage />
    </ThemeContext.Provider>
  );
}

export default App;
