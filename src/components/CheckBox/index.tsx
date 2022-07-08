import React from 'react';
import { Field } from 'formik';

interface IProps {
  name: string;
  title: string;
  value: string;
}

const CheckBox: React.FC<IProps> = ({ name, title, value }) => {
  return (
    <label className="mb-2">
      <div className="flex">
        <Field type="checkbox" name={name} value={value} id="checkbox" />

        <p className="ms-3 login__qn">{title}</p>
      </div>
    </label>
  );
};

export default React.memo(CheckBox);
