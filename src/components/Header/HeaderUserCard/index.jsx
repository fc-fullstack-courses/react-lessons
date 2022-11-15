import React from 'react';

const HeaderUserCard = (props) => {
  const { user, logout, ...rest } = props;

  return (
    <div>
      {user && <img alt={user.name} src={user.src} />}

      <button
        style={{ padding: '20px', backgroundColor: 'lightblue' }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default HeaderUserCard;
