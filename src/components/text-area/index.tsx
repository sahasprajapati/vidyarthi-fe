import React from 'react';
import { Field } from 'formik';

interface IProps {
  name: string;
  rows?: number;
  cols?: number;
  label: string;
  placeHolder: string;
}

const TextArea: React.FC<IProps> = ({
  name,
  rows,
  cols,
  label,
  placeHolder,
}) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <div className="">
        <Field
          as="textarea"
          name={name}
          cols={cols}
          rows={rows}
          className="form-control"
          placeholder={placeHolder}
        />
      </div>
    </React.Fragment>
  );
};

export default React.memo(TextArea);
