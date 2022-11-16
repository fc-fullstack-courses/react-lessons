import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';

class SignUpForm extends Component {
  submitHandler = (e) => {
    e.preventDefault();

    console.log(e.target.elements.email.value); // email
    console.log(e.target.password.value); // password
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.submitHandler}>
        <input className={styles.input} type="email" name="email" />
        <input className={styles.input} type="password" name="password" />
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
