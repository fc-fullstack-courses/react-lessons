import React, { useState } from 'react';
import { Formik } from 'formik';
import { SIGN_UP_SCHEMA } from 'utils/validators/validationShemas';
import styles from './SignUpForm.module.scss';

const initialState = {
  name: '',
  email: 'test@test.com',
  password: '',
};

function SignUpForm(props) {
  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);

    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      {(formikProps) => {
        return (
          <form className={styles.form} onSubmit={formikProps.handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formikProps.values.name}
              onChange={formikProps.handleChange}
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              value={formikProps.values.email}
              onChange={formikProps.handleChange}
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              value={formikProps.values.password}
              onChange={formikProps.handleChange}
            />
            <button className={styles.btn} type="submit">
              Sign Up
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
