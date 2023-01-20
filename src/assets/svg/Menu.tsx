import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const MenuSvg: React.FC<Props> = ({
  fill = '#A098AE',
  width = 33,
  height = 33,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.125 16.5H28.875"
        stroke="#3C5148"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.125 8.25H28.875"
        stroke="#3C5148"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.125 24.75H28.875"
        stroke="#3C5148"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuSvg;
