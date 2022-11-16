import React, { Component } from 'react';
import HeaderUserCard, { userProps } from './HeaderUserCard';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { headerProp1, headerProp2, ...userProps } = this.props;
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

Header.propTypes = {
  headerProp1: PropTypes.bool,
  headerProp2: PropTypes.number,
  logout: PropTypes.func.isRequired,
  user: userProps,
};

export default Header;
