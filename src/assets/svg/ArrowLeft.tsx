import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const ArrowLeftSvg: React.FC<Props> = ({
  fill = '#120D26',
  width = 32,
  height = 32,
  ...props
}) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.75 15H6.25"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 23.75L6.25 15L15 6.25"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftSvg;
