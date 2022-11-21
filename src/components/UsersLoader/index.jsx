import React, { Component } from 'react';
import { getUsers } from '../../api';

class UsersLoader extends Component {
  state = {
    users: [],
    isLoading: false,
    error: null,
    currentPage: 1,
  };

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isLoading: true });

    getUsers(currentPage)
      .then((users) => {
        this.setState({
          users,
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
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  mapUsers = (user) => (
    <div key={user.login.uuid}>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </div>
  );

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  render() {
    const { users, isLoading, error } = this.state;
    const usersList = users.map(this.mapUsers);

    if (isLoading) {
      return <div>LOADING ...</div>;
    }

    if (error) {
      return <div>ERROR: {error}</div>;
    }

    return (
      <div>
        <button onClick={this.nextPage}>Next page</button>
        {usersList}
      </div>
    );
  }
}

export default UsersLoader;
