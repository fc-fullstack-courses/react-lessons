import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
  name: 'user',
  profilePicSrc:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
};

function Greeting(props) {
  const { name, id } = props;
  // name = 'test';
  return (
    <p>
      Hello, {name}-{id}
    </p>
  );
}

class Greeting2 extends React.Component {
  render() {
    const { name, id } = this.props;
    return (
      <p>
        Hello, {name}-{id}
      </p>
    );
  }
}

// root.render(React.createElement(Header));
// root.render(<Header></Header>);
root.render(<App />);
