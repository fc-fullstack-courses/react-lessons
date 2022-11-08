import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Header from './components/Header';

const user = {
  id: 7452552,
  name: 'User',
  role: 'user',
};

const admin = {
  id: 123,
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
      {user.role === 'admin' && <Greeting name={user.name} />}
      {admin.role === 'admin' && <Greeting name={admin.name || "Test" } />}
      <input disabled={user.role === 'admin'} />
    </>
  );
}

export default App;
