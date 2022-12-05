import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';

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

export function CustomTextInput(props) {
  const { name, type, multiple, value, labelText, ...restProps } = props;
  const fieldConfig = { name, type, multiple, value };

  const [field, meta, helpers] = useField(fieldConfig);

  return (
    <div>
      <label>
        {labelText}
        <input className="input" {...field} type={type} {...restProps} />
      </label>
      <ErrorMessage name={name} className="inputError" component="div" />
    </div>
  );
}

export default CustomInput;
