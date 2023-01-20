import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const TickSvg: React.FC<Props> = ({
  fill = '#6B8E4E',
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.28849 9.29289L15.275 0L16.6426 1.41421L6.28849 12.1213L0.769531 6.41421L2.13712 5L6.28849 9.29289Z"
        fill={fill}
      />
    </svg>
  );
};

export default TickSvg;
