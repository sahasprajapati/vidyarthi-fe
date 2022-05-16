/* eslint-disable new-cap */
import React from 'react';
import BellSvg from './Bell';
import CourseSvg from './Course';
import DashboardSvg from './Dashboard';
import DownArrowSvg from './DownArrow';
import SearchSvg from './Search';
import SettingSvg from './Setting';
import TransactionSvg from './Transaction';
export interface Props {
  name: string;
  height?: number | string;
  width?: number | string;
  fill?: string;
}

const IconsList: any = {
  dashboard: (props: Props) => <DashboardSvg {...props} />,
  setting: (props: Props) => <SettingSvg {...props} />,
  transaction: (props: Props) => <TransactionSvg {...props} />,
  course: (props: Props) => <CourseSvg {...props} />,
  search: (props: Props) => <SearchSvg {...props} />,
  bell: (props: Props) => <BellSvg {...props} />,
  'down-arrow': (props: Props) => <DownArrowSvg {...props} />,
};

const Icon: React.FC<Props> = ({ name, ...props }) => {
  try {
    const Component = IconsList[name];
    return Component(props);
  } catch (error) {
    return <span>ICON_NOT_FOUND</span>;
  }
};

export default Icon;
