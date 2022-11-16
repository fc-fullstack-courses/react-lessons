import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
  };

  submitHandler = (e) => {
    e.preventDefault();

    // console.log(e.target.elements.email.value); // email
    // console.log(e.target.password.value); // password
  };

  handleEmailChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    const {
      target: { value },
    } = e;

    this.setState({
      password: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.submitHandler}>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={this.handleEmailChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
