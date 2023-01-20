import React from 'react';
import Icon from 'assets/svg/Icon';
import Heading from 'components/heading';

interface Props {
  children: React.ReactNode;
  title: string;
  variant?: 'small' | 'big';
}

const Accordion: React.FC<Props> = ({ children, title, variant }) => {
  const [showAccordin, setShowAccordin] = React.useState<boolean>(false);
  return (
    <div className="category__container my-3">
      <div
        className="flex-between pointer"
        onClick={() => setShowAccordin(!showAccordin)}
      >
        {variant === 'small' ? (
          <h6 className="f-16">{title} </h6>
        ) : (
          <Heading title={title} />
        )}

        {!showAccordin ? (
          <Icon name="down-arrow" width={10} height={6} fill={'#120D26'} />
        ) : (
          <Icon name="up-arrow" />
        )}
      </div>
      {!showAccordin && (
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
