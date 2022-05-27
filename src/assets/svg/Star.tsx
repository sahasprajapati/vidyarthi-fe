import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const StartSvg: React.FC<Props> = ({
  fill = '#FFC833',
  width = 15,
  height = 14,
  ...props
}) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0L9.995 4.06593L14.6329 5.18237L11.537 8.8117L11.9084 13.5676L7.5 11.7447L3.09161 13.5676L3.46301 8.8117L0.367076 5.18237L5.005 4.06593L7.5 0Z"
        fill="#FFC833"
      />
    </svg>
  );
};

export default StartSvg;
