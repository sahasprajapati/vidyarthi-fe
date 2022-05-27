import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const PlusSvg: React.FC<Props> = ({
  fill = '#A098AE',
  width = 20,
  height = 20,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 5V19"
        stroke="#6B8E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="#6B8E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusSvg;
