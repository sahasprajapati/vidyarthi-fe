import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const EyeSvg: React.FC<Props> = ({
  fill = '#A098AE',
  width = 19,
  height = 20,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_331_1446)">
        <path
          d="M1.21606 10.0007C1.21606 10.0007 4.2562 3.33398 9.57645 3.33398C14.8967 3.33398 17.9368 10.0007 17.9368 10.0007C17.9368 10.0007 14.8967 16.6673 9.57645 16.6673C4.2562 16.6673 1.21606 10.0007 1.21606 10.0007Z"
          stroke="#120D26"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.57576 12.5C10.835 12.5 11.8559 11.3807 11.8559 10C11.8559 8.61929 10.835 7.5 9.57576 7.5C8.31649 7.5 7.29565 8.61929 7.29565 10C7.29565 11.3807 8.31649 12.5 9.57576 12.5Z"
          stroke="#120D26"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_331_1446">
          <rect
            width="18.2408"
            height="20"
            fill="white"
            transform="translate(0.455322)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EyeSvg;
