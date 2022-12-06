import Icon from 'assets/svg/Icon';
import { TestVideo, TestVideo1 } from 'assets/video';
import { DashBoardScrollContent, Tabs, VideoPlayer } from 'components';
import Heading from 'components/Heading';
import MainHeading from 'components/MainHeading';
import { AdminLayout } from 'containers';
import React from 'react';
import ReactPlayer from 'react-player';

interface IProps {}

const StudentCourse: React.FC<IProps> = ({}) => {
  const handleCheckVideo = (val: any) => {
    console.log(val);
  };
  const [activeIndex, setActiveIndex] = React.useState(0);
  const courseCompletion = 10;
  const tabData = [
    {
      id: 0,
      label: 'About',
    },
    {
      id: 1,
      label: 'Course Notes',
    },
    {
      id: 2,
      label: 'New Notes',
    },
    {
      id: 3,
      label: 'Reviews',
    },
  ];
  return (
    <AdminLayout variant="not-spacing">
      <div className="row bg-white border-top">
        <div className="col-md-8 col-sm-12 py-3 px-4">
          <MainHeading title="project management course" />
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
          <div className="max-w-half mt-4">
            <div className="max-w-half">
              <Tabs
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                tabData={tabData}
              />
            </div>

            {activeIndex === 0 && (
              <div className="tab-content">
                <div className="tab-pane fade show active mt-4 mx-4">
                  <Heading title="About Course" />
                  <p className="color-light-black f-14 my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nostrum quae doloribus? Alias minima minus ea ratione
                    obcaecati soluta reprehenderit odit aliquid, distinctio
                    doloribus atque molestiae ad mollitia harum cumque?
                  </p>
                  <p className="color-light-black f-14 my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nostrum quae doloribus? Alias minima minus ea ratione
                    obcaecati soluta reprehenderit odit aliquid, distinctio
                    doloribus atque molestiae ad mollitia harum cumque?
                  </p>
                </div>
              </div>
            )}
            {activeIndex === 1 && (
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  my name is prashant
                </div>
              </div>
            )}
            {activeIndex === 2 && (
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  my name is khanal
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4 col-sm-12 bg-white vh-100 overflow-auto border-left py-3 px-4">
          <Heading title="About the course" />
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
          <p className="color-light-black mt-1 mb-5">
            This course is designed to help your practical day to day management
            to improve your project management knowledge, s..
          </p>
          <Heading title="Course Completion" className="mb-4" />
          <div className="flex justify-content-between mb-1">
            <p className="m-0 pb-1 f-14"> {courseCompletion}% Completed</p>
            <p className="m-0 pb-1 f-14">5/15</p>
          </div>
          <div className="progress" style={{ height: 5 }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: courseCompletion * 10 }}
            />
          </div>
          <DashBoardScrollContent title="">
            <div className="flex justify-content-between mt-5 me-3">
              <div className="flex align-items-center">
                <h6>01</h6>
                <p className="f-14 px-4 text-capitalize">
                  introduction to project management
                </p>
              </div>
              <Icon name="tick" />
            </div>
          </DashBoardScrollContent>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(StudentCourse);
