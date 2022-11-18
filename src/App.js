import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/About';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersPage} />

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
