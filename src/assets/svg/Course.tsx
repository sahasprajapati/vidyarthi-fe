import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const CourseSvg: React.FC<Props> = ({
  fill = '#120D26',
  width = 32,
  height = 32,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.2671 24.1332C27.3337 23.9999 26.4004 23.8665 25.3337 23.8665C22.0004 23.8665 18.8004 24.7999 16.0004 26.6665C13.2004 24.9332 10.0004 23.8665 6.66705 23.8665C5.73372 23.8665 4.66705 23.9999 3.73372 24.1332C3.06705 24.2665 2.53372 24.9332 2.66705 25.7332C2.80039 26.5332 3.46705 26.9332 4.26705 26.7999C5.06705 26.6665 5.86705 26.5332 6.66705 26.5332C9.73372 26.5332 12.6671 27.4665 15.2004 29.3332C15.6004 29.7332 16.2671 29.7332 16.8004 29.3332C20.0004 27.0665 24.0004 26.1332 27.7337 26.7999C28.4004 26.9332 29.2004 26.3999 29.3337 25.7332C29.4671 24.9332 28.9337 24.2665 28.2671 24.1332ZM28.2671 2.79987C27.3337 2.66654 26.4004 2.5332 25.3337 2.5332C22.0004 2.5332 18.8004 3.46654 16.0004 5.3332C13.2004 3.46654 10.0004 2.5332 6.66705 2.5332C5.73372 2.5332 4.66705 2.66654 3.73372 2.79987C3.20039 2.79987 2.66705 3.46654 2.66705 3.99987V19.9999C2.66705 20.7999 3.20039 21.3332 4.00039 21.3332C4.13372 21.3332 4.13372 21.3332 4.26705 21.3332C5.06705 21.1999 5.86705 21.0665 6.66705 21.0665C9.73372 21.0665 12.6671 21.9999 15.2004 23.8665C15.6004 24.2665 16.2671 24.2665 16.8004 23.8665C20.0004 21.5999 24.0004 20.6665 27.7337 21.3332C28.4004 21.4665 29.2004 20.9332 29.3337 20.2665C29.3337 20.1332 29.3337 20.1332 29.3337 19.9999V3.99987C29.3337 3.46654 28.8004 2.79987 28.2671 2.79987Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CourseSvg;
