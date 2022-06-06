import React from 'react';
import Icon from 'assets/svg/Icon';
import Card from 'components/Card';
import Heading from 'components/Heading';
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
    <Card>
      <div className="dashboard__card">
        <div className="flex-between ">
          <div className="flex-col">
            <Heading title={formatMoney(money.toString())} />
            <span className="dashboard__card__title">{title}</span>
          </div>
          <div className="">
            <div className="position-absolute top-0 end-0">
              <div
                className="square"
                style={{ backgroundColor: bgColor }}
              ></div>
            </div>
            <div className="">
              <Icon name={iconName} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(DashBoardCard);
