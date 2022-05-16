import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const DownArrowSvg: React.FC<Props> = ({
  fill = '#120D26',
  width = 11,
  height = 7,
  ...props
}) => {
  return (
    <svg
      width={11}
      height={7}
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M1 1L5.5 6L10 1"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrowSvg;
