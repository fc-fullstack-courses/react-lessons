import React, { useEffect, useState } from 'react';
import { useData } from 'hooks';
import * as API from 'api';

const UsersLoader = (props) => {
  const { data: users, isLoading, error } = useData(API.getOtherUsers);

  const userList = users.map((user) => (
    <article key={user.id}>
      <h2>{user.name}</h2>
      <p>
        email: <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </article>
  ));

  return (
    <div>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>Error</div>}
      {users.length > 0 && userList}
    </div>
  );
};

export default UsersLoader;
