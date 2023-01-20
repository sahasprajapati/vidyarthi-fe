import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const StartSvg: React.FC<Props> = ({
  fill = '#FAA307',
  width = 24,
  height = 24,
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.2884L19.416 24L17.448 15.12L24 9.14526L15.372 8.37474L12 0L8.628 8.37474L0 9.14526L6.552 15.12L4.584 24L12 19.2884Z"
        fill={fill}
      />
    </svg>
  );
};

export default StartSvg;
