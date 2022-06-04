import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const UpArrowSvg: React.FC<Props> = ({
  fill = '#120D26',
  width = 10,
  height = 6,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={6}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.08605 1.79342L1.89704 4.98242C1.60694 5.27253 1.13659 5.27253 0.846484 4.98242C0.55638 4.69232 0.55638 4.22197 0.846484 3.93186L4.56077 0.217578C4.85087 -0.0725259 5.32122 -0.0725259 5.61133 0.217578L9.32561 3.93186C9.61572 4.22197 9.61572 4.69232 9.32561 4.98242C9.03551 5.27253 8.56516 5.27253 8.27506 4.98242L5.08605 1.79342Z"
        fill={fill}
      />
    </svg>
  );
};

export default UpArrowSvg;
