import React, { Component } from 'react';

// function Header(props) {
// const { user } = props;
//   return (
//     <header>
//       <h1>My site</h1>
//       <img src={user.profilePicSrc} alt={user.name} />
//     </header>
//   );
// }

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <h1>My site</h1>
        {/* <img src={user.profilePicSrc} alt={user.name} /> */}
      </header>
    );
  }
}

export default Header;
