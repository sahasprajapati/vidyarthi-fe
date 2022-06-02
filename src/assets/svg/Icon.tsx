/* eslint-disable new-cap */
import React from 'react';
import BasicSvg from './Basic';
import MenuSvg from './Menu';
import BellSvg from './Bell';
import CourseSvg from './Course';
import CrossSvg from './Cross';
import DashboardSvg from './Dashboard';
import DownArrowSvg from './DownArrow';
import FileTextSvg from './FileText';
import FrameSvg from './Frame';
import SearchSvg from './Search';
import SettingSvg from './Setting';
import TransactionSvg from './Transaction';
import UploadSvg from './Upload';
import VideoSvg from './Video';
import PlusSvg from './Plus';
import StartSvg from './Star';
import DotsHorizontalSvg from './Dots';
import UserSvg from './User';
import EyeSvg from './Eye';
import WishListSvg from './WishList';
import ArrowRightSvg from './ArrowRight';
import ArrowLeftSvg from './ArrowLeft';
import CartSvg from './Cart';
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
  video: (props: Props) => <VideoSvg {...props} />,
  curriculum: (props: Props) => <FrameSvg {...props} />,
  'file-text': (props: Props) => <FileTextSvg {...props} />,
  basic: (props: Props) => <BasicSvg {...props} />,
  upload: (props: Props) => <UploadSvg {...props} />,
  dots: (props: Props) => <DotsHorizontalSvg {...props} />,
  cross: (props: Props) => <CrossSvg {...props} />,
  menu: (props: Props) => <MenuSvg {...props} />,
  plus: (props: Props) => <PlusSvg {...props} />,
  star: (props: Props) => <StartSvg {...props} />,
  user: (props: Props) => <UserSvg {...props} />,
  eye: (props: Props) => <EyeSvg {...props} />,
  'wish-list': (props: Props) => <WishListSvg {...props} />,
  'arrow-right': (props: Props) => <ArrowRightSvg {...props} />,
  'arrow-left': (props: Props) => <ArrowLeftSvg {...props} />,
  cart: (props: Props) => <CartSvg {...props} />,
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
