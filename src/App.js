import React from 'react';
import './App.css';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,

      user: {
        id: 123235432,
        name: 'Test',
        src: 'shdnfdsfndsifds.jpg',
        test: false,
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
          user={user}
          logout={this.logout}
        />
        <SignUpForm />
      </>
    );
  }
}

export default App;
