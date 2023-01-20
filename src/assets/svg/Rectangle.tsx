import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const RectangleSvg: React.FC<Props> = ({
  fill = 'white',
  width = 36,
  height = 48,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.7151 4.76999H27.9901C27.3601 2.46002 25.2601 0.75 22.7551 0.75H13.2451C10.7401 0.75 8.6401 2.46002 8.02506 4.76999H6.2851C3.30012 4.76999 0.870117 7.19999 0.870117 10.185V41.835C0.870132 44.82 3.30012 47.25 6.2851 47.25H29.7151C32.7001 47.25 35.1301 44.82 35.1301 41.835V10.185C35.1301 7.19999 32.7001 4.76999 29.7151 4.76999ZM10.0951 32.67H25.9201C27.1501 32.67 28.1701 33.69 28.1701 34.92C28.1701 36.165 27.1501 37.17 25.9201 37.17H10.0951C8.85013 37.17 7.84507 36.165 7.84507 34.92C7.84507 33.69 8.85013 32.67 10.0951 32.67ZM7.84507 26.97C7.84507 25.725 8.85013 24.72 10.0951 24.72H25.9201C27.1501 24.72 28.1701 25.725 28.1701 26.97C28.1701 28.2 27.1501 29.22 25.9201 29.22H10.0951C8.85013 29.22 7.84507 28.2 7.84507 26.97ZM25.9201 21.255H10.0951C8.85013 21.255 7.84507 20.25 7.84507 19.005C7.84507 17.76 8.85013 16.755 10.0951 16.755H25.9201C27.1501 16.755 28.1701 17.76 28.1701 19.005C28.1701 20.25 27.1501 21.255 25.9201 21.255ZM12.3451 6.16499C12.3451 5.65503 12.7501 5.25 13.2451 5.25H22.7551C23.2501 5.25 23.6702 5.65503 23.6702 6.16499V7.875C23.6702 8.38505 23.2501 8.78999 22.7551 8.78999H13.2451C12.7501 8.78999 12.3451 8.38505 12.3451 7.875V6.16499Z"
        fill={fill}
      />
    </svg>
  );
};

export default RectangleSvg;