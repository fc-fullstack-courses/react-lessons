import React, { useState } from 'react';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembering, setIsRemembering] = useState(false);

  const handleChange = ({ target: { value, checked, name } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'isRemembering') {
      setIsRemembering(checked);
    }
  };

  return (
    <form>
      <input type="text" name="email" value={email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="isRemembering"
          checked={isRemembering}
          onChange={handleChange}
        />{' '}
        Remember me
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
