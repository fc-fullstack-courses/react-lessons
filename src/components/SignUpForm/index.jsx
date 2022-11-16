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

  handleChange = (e) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: value,
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
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
