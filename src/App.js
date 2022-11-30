import React, { useState } from 'react';
import './App.css';
import HomePage from 'pages/HomePage';
import { ThemeContext } from 'contexts';
import CONSTANTS from 'constants.js';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
const { THEMES } = CONSTANTS;

function App() {
  const themeTuple = useState(THEMES.DARK);

  return (
    <ThemeContext.Provider value={themeTuple}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
