import React from 'react';
import { FieldProps } from 'formik';
import { memo } from 'react';
import Select from 'react-select';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: any;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
}: CustomSelectProps) => {
  const onChange = (option: any) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item.label)
        : (option as Option).value
    );
  };
  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(
            (option: any) => field.value.indexOf(option.label) >= 0
          )
        : options.find((option: any) => option.label === field.value);
    } else {
      return isMulti ? [] : ('' as any);
    }
  };
  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      classNamePrefix="react-select"
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: '#6b8e4e',
          primary: '#6b8e4e',
        },
      })}
    />
  );
};

export default memo(CustomSelect);
