import React, { useState } from 'react';
import styles from './SignUpForm.module.scss';
import * as yup from 'yup';

const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().min(1).required(),
  lastName: yup.string().min(1).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const user1 = {
  email: 12345,
  password: 'truepass',
  lastName: 'Test',
};

const user2 = {
  email: 'test@test.com',
  password: '1234Test',
  firstName: 'Test',
  lastName: 'Null',
};

const isValid1 = SIGN_UP_SCHEMA.isValidSync(user1);
const isValid2 = SIGN_UP_SCHEMA.isValidSync(user2);

console.log(isValid1);
console.log(isValid2);

try {
  console.log(user1);
  const validate1 = SIGN_UP_SCHEMA.validateSync(user1, {
    strict: true,
    abortEarly: false,
  });
  console.log(validate1);
} catch (error) {
  console.dir(error);
}

try {
  const validate2 = SIGN_UP_SCHEMA.validateSync(user2, {
    strict: true,
    abortEarly: false,
  });
  console.log(validate2);
} catch (error) {
  console.dir(error);
}

function SignUpForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />

      <button className={styles.btn} type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
