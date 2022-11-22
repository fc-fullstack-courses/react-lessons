import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Tree from './components/Tree';
import AboutPage from './pages/About';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostsPage from './pages/PostsPage';
import UsersPage from './pages/UsersPage';

export const ProductContext = React.createContext();
export const ThemeContext = React.createContext();

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
    theme: 'light',
  };

  render() {
    const { product, theme } = this.state;
    return (
      <ProductContext.Provider value={product}>
        <ThemeContext.Provider value={theme}>
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
      </ProductContext.Provider>
    );
  }
}

export default App;
