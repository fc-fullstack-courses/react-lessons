import React, { Component } from 'react';

class UsersLoader extends Component {
  state = {
    users: [
      { id: 1, name: 'Test' },
      { id: 2, name: 'Anton' },
    ],
  };

  mapUsers = (user) => (
    <div key={user.id}>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </div>
  );

  render() {
    const { users } = this.state;
    const usersList = users.map(this.mapUsers);
    return <div>{usersList}</div>;
  }
}

export default UsersLoader;
