import React, { useEffect } from 'react';
import Icon from 'assets/svg/Icon';
import Heading from 'components/heading';

interface Props {
  children: React.ReactNode;
  title: string;
  variant?: 'small' | 'big';
  isOpen?: boolean;
  handleOpen?: () => void;
}

const Accordion: React.FC<Props> = ({
  children,
  title,
  variant,
  isOpen,
  handleOpen,
}) => {
  const [showAccordin, setShowAccordin] = React.useState<boolean>(false);
  useEffect(() => {
    setShowAccordin(Boolean(isOpen));
  }, [isOpen]);
  return (
    <div className="category__container my-3">
      <div
        className="flex-between pointer"
        onClick={() => {
          handleOpen && handleOpen();
          setShowAccordin(!showAccordin);
        }}
      >
        {variant === 'small' ? (
          <h6 className="f-16">{title} </h6>
        ) : (
          <Heading title={title} />
        )}

        {showAccordin && isOpen ? (
          <Icon name="up-arrow" />
        ) : (
          <Icon name="down-arrow" width={10} height={6} fill={'#120D26'} />
        )}
      </div>
      {showAccordin && isOpen && (
        <>
          {variant === 'small' ? (
            <div className="accordin__bottom__border" />
          ) : (
            ''
          )}
          {children}
        </>
      )}
    </div>
  );
};

export default React.memo(Accordion);
