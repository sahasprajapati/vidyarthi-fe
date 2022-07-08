import React from 'react';
import Icon from 'assets/svg/Icon';

interface IProps {
  bgColor: string;
  iconName: string;
  fontWeight: string;
  title: string;
  subTitle: string;
  color: string;
  variant?: 'transaction' | 'dashboard';
  subTitleColor?: string;
}

const InstructorCard: React.FC<IProps> = ({
  bgColor,
  iconName,
  fontWeight,
  title,
  subTitle,
  color,
  variant,
  subTitleColor,
}) => {
  return (
    <div
      className={`${color} ${
        variant === 'transaction' ? 'b10' : 'b16'
      } p-3  my-5 `}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex">
        {variant === 'transaction' ? (
          <div className="p-2 b10" style={{ backgroundColor: '#8CFFBF' }}>
            <Icon name={iconName} width={30} height={30} />
          </div>
        ) : (
          <Icon name={iconName} width={40} height={40} />
        )}
        <div className="ms-2">
          <h6 className={`${fontWeight} fs-18 `}>{title} </h6>
          <p
            className={`${color} f-14 m-0 p-0 `}
            style={{ color: subTitleColor }}
          >
            {' '}
            {subTitle}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InstructorCard);
