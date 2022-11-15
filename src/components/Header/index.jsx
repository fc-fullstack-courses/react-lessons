import React, { Component } from 'react';
import HeaderUserCard from './HeaderUserCard';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { headerProp1, headerProp2, otherProp1, ...userProps } = this.props;
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

const userProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
});

Header.propTypes = {
  headerProp1: PropTypes.bool,
  headerProp2: PropTypes.number,
  logout: PropTypes.func.isRequired,
  user: userProps
};

export default Header;
