import React, { useState } from 'react';
import styles from './SignUpForm.module.scss';
import * as yup from 'yup';

const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().min(1).required(),
  lastName: yup.string().min(1).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

function SignUpForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  }

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
