import React, { useState } from 'react';
import './App.css';
import HomePage from 'pages/HomePage';
import { ThemeContext } from 'contexts';
import CONSTANTS from 'constants.js';
import RefClicker from 'components/RefClicker';
const { THEMES } = CONSTANTS;

function App() {
  const themeTuple = useState(THEMES.DARK);

  return (
    <ThemeContext.Provider value={themeTuple}>
      <HomePage />
      <RefClicker />
    </ThemeContext.Provider>
  );
}

export default App;
