import React, { useReducer } from 'react';

function reducer(state, action) {
  // содержит логику изменения состояния
  // возвращает новое состояние
  const { type, payload } = action;
  const newState = {
    ...state,
    [type]: payload,
  };

  return newState;
}

const initialState = {
  email: '',
  password: '',
  isRemembering: false,
};

const LoginForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target: { value, checked, name, type } }) => {
    const newData = type === 'checkbox' ? checked : value;
    dispatch({ type: name, payload: newData });
  };

  return (
    <form>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="isRemembering"
          checked={state.isRemembering}
          onChange={handleChange}
        />{' '}
        Remember me
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
