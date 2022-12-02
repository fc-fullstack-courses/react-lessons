import * as yup from 'yup';

const EMAIL_SCHEMA = yup.string().email('Must be valid email').required();

export const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().min(1).required(),
  lastName: yup
    .string()
    .min(1, 'Last name must have at least 1 letter')
    .required('You must enter last name'),
  email: EMAIL_SCHEMA,
  password: yup
    .string()
    .matches(/[A-Za-z]{8,}/, 'Password must me 8 symbol or more letters only')
    .required(),
});

export const LOGIN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: yup.string().min(8).required(),
});
