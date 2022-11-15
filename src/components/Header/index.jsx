import React, { Component } from 'react';
import HeaderUserCard from './HeaderUserCard';

class Header extends Component {
  render() {
    const { haederProp1, headerProp2, otherProp1, ...userProps } = this.props;
    const props = {
      ...userProps,
    };
    // props.user
    // props.logout

    return (
      <header>
        <h1>My site</h1>
        <HeaderUserCard {...userProps} />
      </header>
    );
  }
}

export default Header;
