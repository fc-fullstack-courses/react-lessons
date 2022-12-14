import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from 'utils/validators/validationShemas';
import styles from './SignUpForm.module.scss';
import CustomInput, { CustomTextInput } from '../CustomInput';

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
    <Formik
      initialValues={initialState}
      onSubmit={submitHandler}
      validationSchema={SIGN_UP_SCHEMA}
    >
      <Form className={styles.form}>
        <CustomInput className={styles.input} type="text" name="name" placeholder="name" />
        <Field
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
        />
        <ErrorMessage name="email" component="div" />
        <CustomTextInput
          className={styles.input}
          type="password"
          name="password"
          placeholder="password"
        />
        <CustomInput as="select" name="accountLevel">
          <option value="basic">Basic</option>
          <option value="pro">Professional</option>
          <option value="max">Maximal</option>
        </CustomInput>
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
      </Form>
    </Formik>
  );
}

export default SignUpForm;
