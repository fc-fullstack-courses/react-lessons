import React from 'react';
import './App.css';
import Aloha from './components/Aloha';
import AlohaList from './components/AlohaList';
import Greeting from './components/Greeting';
import Header from './components/Header';

const user = {
  id: 7452552,
  name: 'User',
  role: 'user',
};

const admin = {
  id: 123,
  name: 'Admin',
  role: 'admin',
};

class App extends React.Component {
  render() {
    return (
      <>
        <AlohaList />
      </>
    );
  }
}

export default App;
