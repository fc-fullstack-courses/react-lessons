import * as yup from 'yup';

const EMAIL_SCHEMA = yup.string().email().required();

export const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().min(1).required(),
  lastName: yup.string().min(1).required(),
  email: EMAIL_SCHEMA,
  password: yup.string().min(8).required(),
});

export const LOGIN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: yup.string().min(8).required(),
});
