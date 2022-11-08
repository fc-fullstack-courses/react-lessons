import React from 'react';
import './App.css';
import Aloha from './components/Aloha';
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

function App() {
  // v1
  // if (user.role === 'admin') {
  //   return (
  //     <>
  //       <Greeting name="Anton" />
  //       <Greeting />
  //     </>
  //   );
  // }

  // v2
  // return admin.role === 'admin' && <Greeting />;

  return (
    <>
      <Aloha name={user.name} />
      <Aloha name={admin.name} />
    </>
  );
}

export default App;
