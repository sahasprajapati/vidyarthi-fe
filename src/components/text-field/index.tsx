import React from 'react';
import { ErrorMessage, FieldHookConfig, useField } from 'formik';
interface IProps {
  label: string | number;
  placeholder?: string;
  type?: string;
  defaultValue?: string | number;
  readOnly?: boolean;
  hidden?: boolean;
  ref?: any;
}
const TextField = ({
  label,
  placeholder,
  type,
  readOnly,
  defaultValue,
  hidden,
  ref,
  ...otherProps
}: IProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(otherProps);
  return (
    <div className="my-3">
      <label
        className={`input__label ${
          meta.error && meta.touched
            ? 'input__label__error__color'
            : 'position-relative'
        } `}
        htmlFor={field.name}
      >
        {label}{' '}
      </label>
      <input
        className={`form-control  ${
          meta.touched && meta.error ? 'is-invalid' : ''
        } ${!meta.error ? 'is-valid' : ''}`}
        {...field}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete="off"
        readOnly={readOnly}
        hidden={hidden}
        ref={ref}
      />
      {meta.touched && meta.error ? (
        <div className="input__error__icon"></div>
      ) : (
        ''
      )}
      <ErrorMessage
        component="div"
        name={field.name}
        className="input__error__container mb-3"
      />
    </div>
  );
};

export default React.memo(TextField);
