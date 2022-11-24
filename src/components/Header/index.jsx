import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts';

class Header extends Component {
  renderHeader = (user) => (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <img src={user.src} alt={user.name} />
    </header>
  );

  render() {
    return <UserContext.Consumer>{this.renderHeader}</UserContext.Consumer>;
  }
}

export default Header;
