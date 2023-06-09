import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const TrashSvg: React.FC<Props> = ({ width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8H6.66667H28"
        stroke="#120D26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6665 7.99984V5.33317C10.6665 4.62593 10.9475 3.94765 11.4476 3.44755C11.9477 2.94746 12.6259 2.6665 13.3332 2.6665H18.6665C19.3737 2.6665 20.052 2.94746 20.5521 3.44755C21.0522 3.94765 21.3332 4.62593 21.3332 5.33317V7.99984M25.3332 7.99984V26.6665C25.3332 27.3737 25.0522 28.052 24.5521 28.5521C24.052 29.0522 23.3737 29.3332 22.6665 29.3332H9.33317C8.62593 29.3332 7.94765 29.0522 7.44755 28.5521C6.94746 28.052 6.6665 27.3737 6.6665 26.6665V7.99984H25.3332Z"
        stroke="#120D26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 14.6665V22.6665"
        stroke="#120D26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6665 14.6665V22.6665"
        stroke="#120D26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashSvg;
