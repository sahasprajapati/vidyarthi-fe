import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const PlayBtnSvg: React.FC<Props> = ({
  fill = '#ffffff',
  width = 96,
  height = 96,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1538 0C9.88062 0 0 9.88058 0 22.1538V73.8462C0 86.1194 9.88062 96 22.1538 96H73.8462C86.1194 96 96 86.1194 96 73.8462V22.1538C96 9.88058 86.1194 0 73.8462 0H22.1538ZM35.012 25.8462C35.4501 25.8304 35.8797 25.9711 36.2236 26.2428L62.0697 46.5505C63.0068 47.2896 63.0068 48.7104 62.0697 49.4495C53.4562 56.2178 44.8371 62.9821 36.2236 69.75C35.01 70.7119 33.2225 69.8419 33.2308 68.2933V27.6923C33.2302 26.6977 34.0179 25.8855 35.012 25.8462Z"
        fill={fill}
      />
    </svg>
  );
};

export default PlayBtnSvg;
