import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const elems = (
//   <div id="test">
//     <h1>hello from react!!!</h1>
//     <p>asdsafd</p>
//   </div>
// );

// const h1 = React.createElement('h1', {}, 'hello from react!!!');
// const p = React.createElement('p', null, 'asdsafd');
// const elems2 = React.createElement('div', { id: 'test' }, h1, p);

const name = 'User';
// root.render(<p>Hello, {name}</p>);
// root.render(<p>2 + 2 = {2 + 2}</p>);
// const isMale = false;
// root.render(<p>User is {isMale ? 'male' : 'female'}</p>);

const user = {
  name: 'user',
  profilePicSrc:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
};

root.render(
  <img
    src={user.profilePicSrc}
    alt={user.name}
    currentNumber={4}
    disabled
    // disabled={true}
  />
);
