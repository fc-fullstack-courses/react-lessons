import React from 'react';
import PropTypes from 'prop-types';

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
const userProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
});

HeaderUserCard.propTypes = {
  logout: PropTypes.func.isRequired,
  user: userProps,
};

export default HeaderUserCard;
