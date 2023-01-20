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
  label?: string;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  label,
  isMulti = false,
}: CustomSelectProps) => {
  const selectOptions = options
    ? options?.map((item: { name: string; id: string }) => {
        return {
          label: item?.name,
          value: item?.id,
        };
      })
    : [];
  const onChange = (selectOptions: any) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (selectOptions as Option[]).map((item: Option) => item.label)
        : (selectOptions as Option).value
    );
  };
  const getValue = () => {
    if (selectOptions) {
      return isMulti
        ? selectOptions.filter(
            (option: any) => field.value.indexOf(option.label) >= 0
          )
        : selectOptions.find((option: any) => option.label === field.value);
    } else {
      return isMulti ? [] : ('' as any);
    }
  };
  return (
    <>
      <label className="input__label  mt-4" htmlFor={field.name}>
        {label}
      </label>
      <Select
        className={`${className} mb-4`}
        name={field.name}
        value={getValue()}
        onChange={onChange}
        placeholder={placeholder}
        options={selectOptions}
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
    </>
  );
};

export default memo(CustomSelect);
