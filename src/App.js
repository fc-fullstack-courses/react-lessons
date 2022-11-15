import React from 'react';
import './App.css';
import FlexContainer from './components/FlexContainer';
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
      <main>
        <List>
          <li>12323432</li>
          <li>123343</li>
          <li>dsadsad</li>
          <li>fdsdgd</li>
        </List>
        <FlexContainer justContent="flex-start" alignItems="center">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </FlexContainer>
      </main>
    );
  }
}

export default App;
