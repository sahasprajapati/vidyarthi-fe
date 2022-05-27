import React, { ReactNode } from 'react';

interface Props {
  variant: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant,
  type = 'button',
}) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className={`${
          variant === 'primary'
            ? 'primary__btn'
            : variant === 'secondary'
            ? 'secondary__btn'
            : variant === 'outline'
            ? 'outline__btn'
            : null
        }`}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
