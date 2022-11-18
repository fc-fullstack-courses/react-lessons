import React, { Component } from 'react';

class UsersLoader extends Component {
  state = {
    users: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        this.setState({
          users: results,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  mapUsers = (user) => (
    <div key={user.login.uuid}>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </div>
  );

  render() {
    const { users, isLoading, error } = this.state;
    const usersList = users.map(this.mapUsers);

    if (isLoading) {
      return <div>LOADING ...</div>;
    }

    if (error) {
      return <div>ERROR: {error}</div>;
    }

    return <div>{usersList}</div>;
  }
}

export default UsersLoader;
