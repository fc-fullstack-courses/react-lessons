import React, { Component } from 'react';

class UsersLoader extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        this.setState({
          users: results,
        });
      });
  }

  mapUsers = (user) => (
    <div key={user.login.uuid}>
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
