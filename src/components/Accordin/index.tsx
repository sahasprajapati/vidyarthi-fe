import React from 'react';
import Icon from 'assets/svg/Icon';
import Heading from 'components/Heading';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Accordin: React.FC<Props> = ({ children, title }) => {
  const [showAccordin, setShowAccordin] = React.useState<boolean>(false);
  return (
    <div className="category__container my-3">
      <div
        className="flex-between pointer"
        onClick={() => setShowAccordin(!showAccordin)}
      >
        <Heading title={title} />
        {!showAccordin ? (
          <Icon name="down-arrow" width={10} height={6} fill={'#120D26'} />
        ) : (
          <Icon name="up-arrow" />
        )}
      </div>
      {!showAccordin && <>{children}</>}
    </div>
  );
};

export default React.memo(Accordin);
