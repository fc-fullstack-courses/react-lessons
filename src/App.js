import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Tree from './components/Tree';
import { ProductContext, ThemeContext, UserContext } from './contexts';
import AboutPage from './pages/About';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostsPage from './pages/PostsPage';
import UsersPage from './pages/UsersPage';
import CONSTANTS from './constants';
const { THEMES } = CONSTANTS;

// создайте контекст, позволяющий менять тему приложения
// пускай будут 2 темы, какая-то стоит по умолчанию (в каком то стейте сидит)
// 'light', 'dark'
// в вложенном комопненте приймите єти данные з конткеста
// и по условию замените стили

class App extends React.Component {
  state = {
    product: {
      id: 5,
      name: 'Mobila',
      price: 1000,
    },
    theme: THEMES.LIGHT,
    user: {
      id: 44546546,
      name: 'Test Testenko',
      src: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    },
  };

  changeTheme = () => {
    const { theme } = this.state;

    this.setState({
      theme: theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
    });
  };

  render() {
    const { product, theme, user } = this.state;
    return (
      <ProductContext.Provider value={product}>
        <UserContext.Provider value={user}>
          <ThemeContext.Provider value={[theme, this.changeTheme]}>
            <Header />

            <Tree />

            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/users" component={UsersPage} />
              <Route path="/posts" component={PostsPage} />

              <Route
                path="/about"
                render={(routeProps) => <AboutPage {...routeProps} />}
              />

              <Route path="/contacts">
                <ContactsPage />
              </Route>

              <Route path="*">
                {({ match, history, location }) => (
                  <NotFoundPage
                    match={match}
                    history={history}
                    location={location}
                  />
                )}
              </Route>
            </Switch>
            <Footer />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </ProductContext.Provider>
    );
  }
}

export default App;
