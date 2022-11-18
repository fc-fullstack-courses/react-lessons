import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/About';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/about" render={() => <AboutPage />} />

        <Route path="/contacts">
          <ContactsPage />
        </Route>

        <Route path="*">{() => <NotFoundPage />}</Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
