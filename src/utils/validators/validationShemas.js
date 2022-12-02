import * as yup from 'yup';

export const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().min(1).required(),
  lastName: yup.string().min(1).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
