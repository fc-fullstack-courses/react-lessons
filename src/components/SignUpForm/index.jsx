import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { SIGN_UP_SCHEMA } from 'utils/validators/validationShemas';
import styles from './SignUpForm.module.scss';

const initialState = {
  name: '',
  email: 'test@test.com',
  password: '',
  gender: '',
  isSubscribed: false,
  accountLevel: 'basic',
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
            <Field className={styles.input} type="text" name="name" />
            <Field className={styles.input} type="email" name="email" />
            <Field className={styles.input} type="password" name="password" />
            <Field as="select" name="accountLevel">
              <option value="basic">Basic</option>
              <option value="pro">Professional</option>
              <option value="max">Maximal</option>
            </Field>
            <label>
              <Field type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <Field type="checkbox" name="isSubscribed" />
              Subscribe to news
            </label>
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
