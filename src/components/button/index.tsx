import React, { ReactNode } from 'react';

interface Props {
  variant: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting?: boolean;
  isValid?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant,
  type = 'button',
  isSubmitting,
  isValid,
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
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? (
          <div className="">
            Loading
            <span
              className="spinner-border spinner-border-sm mx-2"
              role="status"
              aria-hidden="true"
            ></span>
          </div>
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default React.memo(Button);
