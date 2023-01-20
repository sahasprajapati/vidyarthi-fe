import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const CreditSvg: React.FC<Props> = ({
  fill = '#6B8E4E',
  width = 30,
  height = 30,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.25 5H3.75C2.36929 5 1.25 6.11929 1.25 7.5V22.5C1.25 23.8807 2.36929 25 3.75 25H26.25C27.6307 25 28.75 23.8807 28.75 22.5V7.5C28.75 6.11929 27.6307 5 26.25 5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 12.5H28.75"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CreditSvg;
