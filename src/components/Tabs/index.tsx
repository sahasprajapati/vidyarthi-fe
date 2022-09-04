import BorderBottom from 'components/BorderBottom';
import React from 'react';

interface IProps {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  tabData: { label: string; id: number }[];
}
const Tab: React.FC<IProps> = ({ setActiveIndex, activeIndex, tabData }) => {
  const handleClick = (index: number) => setActiveIndex(index);
  const checkActive = (index: number, className: string) =>
    activeIndex === index ? className : '';
  return (
    <div className="flex flex-wrap tab__wrapper">
      {tabData.map((item) => (
        <button
          className={`tab ${checkActive(item?.id, 'active')} mx-3`}
          onClick={() => handleClick(item?.id)}
          key={item?.id}
        >
          {item?.label}
        </button>
      ))}
      <BorderBottom />
    </div>
  );
};

export default React.memo(Tab);
