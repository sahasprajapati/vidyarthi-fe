import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const BookSvg: React.FC<Props> = ({
  fill = 'white',
  width = 42,
  height = 42,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39.4 33.2001C38 33 36.6 32.8 35 32.8C30 32.8 25.2 34.2001 21 37C16.8 34.4001 12 32.8 7 32.8C5.6 32.8 4 33 2.6 33.2001C1.6 33.4001 0.8 34.4 1 35.6C1.2 36.8 2.2 37.4001 3.4 37.2001C4.6 37 5.8 36.8 7 36.8C11.6 36.8 16 38.2001 19.8 41C20.4 41.6 21.4 41.6 22.2 41C27 37.6 33 36.2001 38.6 37.2001C39.6 37.4001 40.8 36.6 41 35.6C41.2 34.4 40.4 33.4001 39.4 33.2001ZM39.4 1.20005C38 1.00005 36.6 0.800049 35 0.800049C30 0.800049 25.2 2.20005 21 5.00005C16.8 2.20005 12 0.800049 7 0.800049C5.6 0.800049 4 1.00005 2.6 1.20005C1.8 1.20005 1 2.20005 1 3.00005V27C1 28.2001 1.8 29 3 29C3.2 29 3.2 29 3.4 29C4.6 28.8 5.8 28.6 7 28.6C11.6 28.6 16 30 19.8 32.8C20.4 33.4 21.4 33.4 22.2 32.8C27 29.4 33 28 38.6 29C39.6 29.2001 40.8 28.4 41 27.4C41 27.2 41 27.2001 41 27V3.00005C41 2.20005 40.2 1.20005 39.4 1.20005Z"
        fill={fill}
      />
    </svg>
  );
};

export default BookSvg;
