import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';

function signUp(userData) {
  console.log(`${userData.email} ${userData.password} is registered`);
}

const initialState = {
  email: '',
  password: '',
  accountLevel: 'adv',
};

class SignUpForm extends Component {
  state = structuredClone(initialState);

  submitHandler = (e) => {
    const { email, password } = this.state;
    e.preventDefault();

    // console.log(e.target.elements.email.value); // email
    // console.log(e.target.password.value); // password
    signUp({
      email,
      password,
    });

    // e.target.reset();

    this.setState({
      ...initialState,
    });
  };

  handleChange = (e) => {
    const {
      target: { value, name },
    } = e;

    const newState = {
      [name]: value,
    };
    this.setState(newState);
  };

  render() {
    const { email, password, accountLevel } = this.state;
    return (
      <form className={styles.form} onSubmit={this.submitHandler}>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <select
          className={styles.input}
          name="accountLevel"
          value={accountLevel}
          onChange={this.handleChange}
        >
          <option value="basic">Basic</option>
          <option value="adv">Advanced</option>
          <option value="pro">Pro</option>
        </select>
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
