import React from 'react';

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const DashboardSvg: React.FC<Props> = ({
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
        d="M7.99967 5.3335C6.52691 5.3335 5.33301 6.5274 5.33301 8.00016V12.0002C5.33301 13.473 6.52691 14.6668 7.99967 14.6668H11.9997C13.4725 14.6668 14.6663 13.473 14.6663 12.0002V8.00016C14.6663 6.5274 13.4725 5.3335 11.9997 5.3335H7.99967ZM19.9997 5.3335C18.5269 5.3335 17.333 6.5274 17.333 8.00016V12.0002C17.333 13.473 18.5269 14.6668 19.9997 14.6668H23.9997C25.4725 14.6668 26.6663 13.473 26.6663 12.0002V8.00016C26.6663 6.5274 25.4725 5.3335 23.9997 5.3335H19.9997ZM5.33301 20.0002C5.33301 18.5274 6.52691 17.3335 7.99967 17.3335H11.9997C13.4725 17.3335 14.6663 18.5274 14.6663 20.0002V24.0002C14.6663 25.473 13.4725 26.6668 11.9997 26.6668H7.99967C6.52691 26.6668 5.33301 25.473 5.33301 24.0002V20.0002ZM19.9997 17.3335C18.5269 17.3335 17.333 18.5274 17.333 20.0002V24.0002C17.333 25.473 18.5269 26.6668 19.9997 26.6668H23.9997C25.4725 26.6668 26.6663 25.473 26.6663 24.0002V20.0002C26.6663 18.5274 25.4725 17.3335 23.9997 17.3335H19.9997Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DashboardSvg;