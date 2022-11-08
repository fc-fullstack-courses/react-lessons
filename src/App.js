import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Header from './components/Header';

function App() {
  return (
    <>
      <Greeting name="Anton" />
      <Greeting />
    </>
  );
}

export default App;
