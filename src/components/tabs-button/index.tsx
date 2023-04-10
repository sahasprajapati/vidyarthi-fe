import BorderBottom from 'components/border-bottom';
import React from 'react';

interface IProps {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  tabData: { label: string; id: number }[];
}
const TabButton: React.FC<IProps> = ({
  setActiveIndex,
  activeIndex,
  tabData,
}) => {
  const handleClick = (index: number) => setActiveIndex(index);
  const checkActive = (index: number, className: string) =>
    activeIndex === index ? className : '';
  return (
    <div className="flex flex-wrap ">
      {tabData.map((item) => (
        <button
          className={`tab ${checkActive(
            item?.id,
            'active'
          )} mx-3 text-capitalize`}
          onClick={() => handleClick(item?.id)}
          key={item?.id}
        >
          {item?.label}
        </button>
      ))}
    </div>
  );
};

export default React.memo(TabButton);
