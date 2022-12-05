import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CustomInput = (props) => {
  const { name, labelText, ...restProps } = props;
  return (
    <div>
      <label>
        {labelText}
        <Field name={name} className="input" {...restProps} />
      </label>
      <ErrorMessage name={name} className="inputError" component="div" />
    </div>
  );
};

export default CustomInput;
