import React from 'react';
import Icon from 'assets/svg/Icon';

interface IProps {
  bgColor: string;
  iconName: string;
  fontWeight: string;
  title: string;
  subTitle: string;
  color: string;
}

const InstructorCard: React.FC<IProps> = ({
  bgColor,
  iconName,
  fontWeight,
  title,
  subTitle,
  color,
}) => {
  return (
    <div
      className={`${color} p-3 b16 my-5 `}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex">
        <Icon name={iconName} width={40} height={40} />
        <div className="ms-2">
          <h6 className={`${fontWeight} fs-18 `}>{title} </h6>
          <p className={`${color} f-14 m-0 p-0 `}> {subTitle} </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InstructorCard);
