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

function App() {
  const [product, setProduct] = useState({
    id: 5,
    name: 'Mobila',
    price: 1000,
  });

  return (
    <>
      <Header />
      <Tree product={product} />
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
            <NotFoundPage match={match} history={history} location={location} />
          )}
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
