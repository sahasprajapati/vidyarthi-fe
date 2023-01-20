import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const CrossSvg: React.FC<Props> = ({
  fill = '#A098AE',
  width = 32,
  height = 32,
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M18 6L6 18"
          stroke="#120D26"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#120D26"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CrossSvg;
