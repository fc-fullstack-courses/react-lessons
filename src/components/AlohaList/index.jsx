import React, { Component } from 'react';
import Aloha from '../Aloha';

class AlohaList extends Component {
  state = {
    users: [
      { id: 1, name: 'user 1' },
      { id: 2, name: 'user 2' },
      { id: 3, name: 'user 3' },
      { id: 4, name: 'user 4' },
      { id: 5, name: 'user 5' },
      { id: 6, name: 'user 6' },
    ],
  };

  sortUsers = () => {
    const { users } = this.state;

    const copy = structuredClone(users);
    // copy.reverse();

    this.setState({
      users: copy.reverse(),
    });
  };

  render() {
    const { users } = this.state;

    const alohas = users.map((user) => (
      <li key={`${user.id}-${user.name}`}>
        <Aloha name={user.name} />
      </li>
    ));

    return (
      <div>
        <h1>Aloha list</h1>
        <button onClick={this.sortUsers}>Change order</button>
        <ul>{alohas}</ul>
      </div>
    );
  }
}

export default AlohaList;
