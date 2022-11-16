import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';

function signUp(userData) {
  console.log(`${userData.email} ${userData.password} is registered`);
}

const initialState = {
  email: '',
  password: '',
  accountLevel: 'adv',
  isAdult: false,
  gender: 'female',
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
      target: { value, name, type, checked },
    } = e;

    const newValue = type === 'checkbox' ? checked : value;

    const newState = {
      [name]: newValue,
    };
    this.setState(newState);
  };

  render() {
    const { email, password, accountLevel, isAdult, gender } = this.state;
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

        <label>
          <input
            type="checkbox"
            name="isAdult"
            checked={isAdult}
            onChange={this.handleChange}
          />{' '}
          Are you an adult?
        </label>
        <p>Choose your gender</p>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={this.handleChange}
          />{' '}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={this.handleChange}
          />{' '}
          Female
        </label>
        <button disabled={!isAdult} className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
