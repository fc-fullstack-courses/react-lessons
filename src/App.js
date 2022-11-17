import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

function Home() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}
function About() {
  return (
    <main>
      <h1>About page</h1>
    </main>
  );
}

function Contacts() {
  return (
    <main>
      <h1>Contacts page</h1>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>This is footer</p>
    </footer>
  );
}

export default App;
