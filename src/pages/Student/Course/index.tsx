import Icon from 'assets/svg/Icon';
import { TestVideo, TestVideo1 } from 'assets/video';
import { VideoPlayer } from 'components';
import Heading from 'components/Heading';
import { AdminLayout } from 'containers';
import React from 'react';
import ReactPlayer from 'react-player';

interface IProps {}

const StudentCourse: React.FC<IProps> = ({}) => {
  const handleCheckVideo = (val: any) => {
    console.log(val);
  };
  return (
    <AdminLayout variant="not-spacing">
      <div className="row bg-white p-3">
        <div className="col-md-8 col-sm-12">
          <Heading title="project management course" className="" />
          <div className="flex">
            <div className="flex align-items-center mb-3">
              <span className="me-2 mt-1">5.2</span>
              <Icon name="star" height={18} width={18} />
            </div>
            <p className="fs-18 color-light-black mx-3">Review (1.5k)</p>
            <p className="fs-18 color-light-black text-capitalize">
              10 students
            </p>
          </div>
          <VideoPlayer
            VideoSource={TestVideo}
            handleProgress={handleCheckVideo}
            thumbnail="https://cdn.pixabay.com/photo/2022/08/09/16/19/sea-7375377_960_720.jpg"
          />
        </div>
        <div className="col-md-4 col-sm-12 bg-white vh-100 overflow-auto border-left">
          <Heading title="About the course" className="py-3 px-3" />
          <div className="flex">
            <img
              src="https://cdn.pixabay.com/photo/2022/08/06/12/34/corsac-fox-7368515_960_720.jpg"
              alt="avatar"
              width={48}
              height={48}
              className="rounded-circle"
            />
            <div className="ms-2 mt-3">
              <h6 className="m-0 p-0">Prof. Jhon Breaker</h6>
              <p className="color-light-black mt-2">Designer expert</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(StudentCourse);
