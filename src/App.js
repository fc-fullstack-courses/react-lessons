import React from 'react';
import './App.css';
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
      <main className='container'>
        <button className='btn' onClick={this.handleClick}>Toggle isVisible</button>
        {this.state.isVisible && <Timer />}
      </main>
    );
  }
}

export default App;
