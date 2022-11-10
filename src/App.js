import React from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  state = {
    isVisible: true,
  };
  render() {
    return (
      <main>
        <button
          onClick={() => this.setState({ isVisible: !this.state.isVisible })}
        >
          Toggle isVisible
        </button>
        {this.state.isVisible && <Timer />}
      </main>
    );
  }
}

export default App;
