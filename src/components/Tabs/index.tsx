import Icon from 'assets/svg/Icon';
import React from 'react';

const tabData = [
  {
    id: 1,
    name: 'Basic Information',
    icon: <Icon name="basic" />,
  },
  {
    id: 2,
    name: 'Advanced Information',
    icon: <Icon name="file-text" />,
  },
  {
    id: 3,
    name: 'Curriculum',
    icon: <Icon name="video" />,
  },
  {
    id: 4,
    name: 'Publish Course',
    icon: <Icon name="curriculum" />,
  },
];

const Tab: React.FC = () => {
  const [toggle, setToggle] = React.useState<string>('tab1');
  return (
    <div className="tab__container">
      <div className="flex flex-wrap">
        {tabData.map((e) => {
          const active = 'tab' + e?.id;
          return (
            <div
              className="flex pointer mx-5 my-3 "
              key={e?.id}
              onClick={() => setToggle('tab' + e?.id)}
            >
              {e?.icon}
              <h6 className={`${toggle === active ? active : ''}`}>
                {e?.name}
              </h6>
            </div>
          );
        })}
      </div>
      <div className="border-bottom mb-5" />
      {/* {toggle === 0 && (
        <div className="">
          <h5>this is tab 0</h5>
        </div>
      )}
      {toggle === 1 && (
        <div className="">
          <h5>this is tab 1</h5>
        </div>
      )}
      {toggle === 2 && (
        <div className="">
          <h5>this is tab 2</h5>
        </div>
      )}
      {toggle === 3 && (
        <div className="">
          <h5>this is tab 3</h5>
        </div>
      )} */}
    </div>
  );
};

export default React.memo(Tab);
