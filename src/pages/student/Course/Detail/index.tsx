import Icon from 'assets/svg/Icon';
import { DashBoardScrollContent, Tabs, VideoPlayer } from 'components';
import Heading from 'components/heading';
import MainHeading from 'components/main-heading';
import { AdminLayout } from 'containers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMyCourseById } from 'redux/actions/course.action';
import { Course, CourseReducer, Lecture } from 'redux/reducers/course.reducer';

interface IProps {}

const StudentCourse: React.FC<IProps> = ({}) => {
  const courseData: CourseReducer = useSelector((state: any) => state.course);
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');

  const [selectedLecture, setSelectedLecture] = useState({
    sectionId: 0,
    lectureId: 0,
  });
  const [currentLecture, setCurrentLecture] = useState<Lecture>();
  const {
    selectedCourse,
  }: {
    selectedCourse: Course;
  } = courseData ?? {};
  const { courseId } = useParams();
  const dispatch: any = useDispatch();

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

  useEffect(() => {
    if (selectedLecture) {
      if (selectedCourse?.sections?.length > 0) {
        const sections = selectedCourse.sections;
        if (sections[selectedLecture?.sectionId]?.lectures?.length > 0) {
          const lecture =
            sections[selectedLecture?.sectionId]?.lectures[
              selectedLecture?.lectureId
            ];
          setCurrentLecture(lecture);
        }
      }
    }
  }, [selectedLecture]);

  useEffect(() => {
    dispatch(fetchMyCourseById(courseId ? +courseId : 0));
  }, []);
  return (
    <AdminLayout variant="not-spacing">
      <div className="row bg-white border-top">
        <div className="col-md-8 col-sm-12 py-3 px-4">
          <MainHeading title={selectedCourse?.title ?? ''} />
          <div className="flex">
            <div className="flex align-items-center mb-3">
              <span className="me-2 mt-1">
                {selectedCourse?.ratingsAvg ?? 5}
              </span>
              {Array(Math.round(selectedCourse?.ratingsAvg ?? 5))
                .fill('')
                .map((e, i) => (
                  <div className="mx-1" key={i}>
                    <Icon name="star" fill="#FAA307" height={18} width={18} />
                  </div>
                ))}
              {Array(Math.round(5 - (selectedCourse?.ratingsAvg ?? 5)))
                .fill('')
                .map((e, i) => (
                  <div className="mx-1" key={i}>
                    <Icon name="star" fill="grey" height={18} width={18} />
                  </div>
                ))}
            </div>
            <p className="fs-18 color-light-black mx-3">
              Review ({selectedCourse?.ratingsUserCount ?? 0})
            </p>
            <p className="fs-18 color-light-black text-capitalize">
              {selectedCourse?.coursesOnStudents?.length ?? 0} students
            </p>
          </div>
          <VideoPlayer
            VideoSource={currentLecture?.video ?? ''}
            handleProgress={handleCheckVideo}
            thumbnail={selectedCourse?.thumbnail ?? ''}
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
                  {currentLecture?.description ?? ''}
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
              <h6 className="m-0 p-0">
                {selectedCourse?.instructors?.length > 0 &&
                  selectedCourse?.instructors[0]?.name}
              </h6>
              <p className="color-light-black mt-2">
                {selectedCourse?.instructors?.length > 0 &&
                  selectedCourse?.instructors[0]?.occupation}
              </p>
            </div>
          </div>
          <p className="color-light-black mt-1 mb-5">
            {selectedCourse?.description}
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
            {selectedCourse?.sections?.map((section, index) => {
              return (
                <>
                  <div
                    className="flex justify-content-between mt-5 me-3"
                    key={index}
                  >
                    <div className="flex align-items-center">
                      <h6>{index + 1}</h6>
                      <p className="f-14 px-4 text-capitalize">
                        {section?.name}
                      </p>
                    </div>
                    <Icon name="tick" />
                  </div>
                  <div
                    style={{
                      paddingLeft: '2px',
                    }}
                  >
                    {section?.lectures?.map((lecture, lecIndex) => {
                      return (
                        // <div
                        //   className="flex justify-content-between mt-5 me-3"
                        //   key={index}
                        // >
                        <div
                          className="flex justify-content-between  me-3 pointer"
                          key={lecIndex}
                          onClick={() => {
                            setSelectedLecture({
                              sectionId: index,
                              lectureId: lecIndex,
                            });
                          }}
                        >
                          <div className="px-4 flex align-items-center">
                            <h6>o</h6>
                            <p className="f-14 px-4 text-capitalize">
                              {lecture?.name}
                            </p>
                          </div>
                          <Icon name="tick" />
                        </div>

                        // </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </DashBoardScrollContent>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(StudentCourse);
