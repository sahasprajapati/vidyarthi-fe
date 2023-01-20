import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const DotsHorizontalSvg: React.FC<Props> = ({
  fill = '',
  width = 15,
  height = 15,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 13.125V11.875C12.5 11.212 12.2366 10.5761 11.7678 10.1072C11.2989 9.63839 10.663 9.375 10 9.375H5C4.33696 9.375 3.70107 9.63839 3.23223 10.1072C2.76339 10.5761 2.5 11.212 2.5 11.875V13.125"
        stroke="#6B8E4E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 6.875C8.88071 6.875 10 5.75571 10 4.375C10 2.99429 8.88071 1.875 7.5 1.875C6.11929 1.875 5 2.99429 5 4.375C5 5.75571 6.11929 6.875 7.5 6.875Z"
        stroke="#6B8E4E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DotsHorizontalSvg;
