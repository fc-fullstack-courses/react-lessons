import React, { useEffect, useState } from 'react';
import { useData, useClicker } from 'hooks';
import * as API from 'api';

const UsersLoader = (props) => {
  const { data: users, isLoading, error } = useData(API.getOtherUsers);
  const clicks = useClicker();

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
      <h1>Clicks: {clicks}</h1>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>Error</div>}
      {users.length > 0 && userList}
    </div>
  );
};

export default UsersLoader;
