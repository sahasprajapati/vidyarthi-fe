import React from 'react';
import Icon from 'assets/svg/Icon';
import Heading from 'components/heading';
import formatMoney from 'utils/formatMoney';

interface Props {
  money: string;
  title: string;
  iconName: string;
  bgColor: string;
}

const DashBoardCard: React.FC<Props> = ({
  money,
  title,
  iconName,
  bgColor,
}) => {
  return (
    <div className="card__container position-relative px-2">
      <div className="dashboard__card">
        <div className="flex-between">
          <div className="flex-col">
            <Heading title={formatMoney(money.toString())} />
            <span className="dashboard__card__title">{title}</span>
          </div>
          <div className="position-absolute top-0 end-0">
            <div className="square" style={{ backgroundColor: bgColor }} />
          </div>
          <Icon name={iconName} width={10} height={10} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DashBoardCard);
