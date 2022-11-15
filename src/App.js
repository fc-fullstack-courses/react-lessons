import React from 'react';
import './App.css';
import List from './components/List';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };

    this.intervalId = null;
  }

  handleClick = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    return (
      <main className="container">
        <List>
          <li>12323432</li>
          <li>123343</li>
          <li>dsadsad</li>
          <li>fdsdgd</li>
        </List>
      </main>
    );
  }
}

export default App;
