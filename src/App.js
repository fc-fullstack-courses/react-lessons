import React from 'react';
import './App.css';
import FlexContainer from './components/FlexContainer';
import Header from './components/Header';
import List from './components/List';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,

      user: {
        id: 123235432,
        name: 'Test',
        src: 'shdnfdsfndsifds.jpg',
      },
    };

    this.intervalId = null;
  }

  handleClick = () => this.setState({ isVisible: !this.state.isVisible });

  logout = () => {
    // по хорошему удаляет юзера
    this.setState({
      user: null,
    });
    alert('Вы вышли');
  };

  render() {
    const { user } = this.state;

    return (
      <>
        <Header
          headerProp1={true}
          headerProp2={42}
          otherProp1={null}
          user={user}
          logout={this.logout}
        />
      </>
    );
  }
}

export default App;
