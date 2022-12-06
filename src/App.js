import React, { useState } from 'react';
import './App.css';
import HomePage from 'pages/HomePage';
import { ThemeContext } from 'contexts';
import CONSTANTS from 'constants.js';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import CounterPage from 'pages/ClickerPage';
import SignUpPage from 'pages/SignUpPage';
import UsersPage from 'pages/UsersPage';
const { THEMES } = CONSTANTS;

function App() {
  const themeTuple = useState(THEMES.DARK);

  return (
    <ThemeContext.Provider value={themeTuple}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/counter" exact component={CounterPage} />
        <Route path="/users" exact component={UsersPage} />
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
