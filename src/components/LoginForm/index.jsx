import React, { useReducer } from 'react';

function reducer(state, action) {
  // содержит логику изменения состояния
  // возвращает новое состояние
  const newState = {
    ...state,
    [action.name] : action.newData
  }

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

    const action = { name, newData };
    dispatch(action);
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
