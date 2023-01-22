import MainHeading from 'components/main-heading';
import { AdminLayout } from 'containers';
import React, { useEffect } from 'react';
import Button from 'components/button';
import Icon from 'assets/svg/Icon';
import formatMoney from 'utils/formatMoney';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CourseReducer } from 'redux/reducers/course.reducer';
import { fetchCourse } from 'redux/actions/course.action';

const AdminCourse: React.FC = () => {
  const navigate = useNavigate();
  const closeRef = React.useRef<any>(null);
  const [courseOption, setCourseOption] = React.useState<any>(null);
  const courseData: CourseReducer = useSelector((state: any) => state.course);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(
      fetchCourse({
        take: courseData.take,
        page: courseData.page,
        filter: courseData.filter,
        order: courseData.order,
      })
    );
  }, []);

  return (
    <AdminLayout>
      <div className="flex-between mt-3 mb-5">
        <MainHeading title="All Courses" />
        <Button
          variant="primary"
          onClick={() => navigate('/admin-course-add')}
          type="button"
          isValid={true}
        >
          Add course
        </Button>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
          <label htmlFor="" className="label__heading mb-1">
            To Date
          </label>
          <div className="flex course__search__container">
            <Icon name="search" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for courses..."
              className="form-control shadow-none bg-transparent outline-none border-none"
            />
          </div>
        </div>
        {Array(4)
          .fill('')
          .map((e, i) => (
            <div className="col-lg-2 col-md-2 col-sm-6 col-12 mb-2" key={i}>
              <label htmlFor="" className="label__heading mb-1">
                To Date
              </label>
              <div className="flex-between course__filter__container">
                <select
                  name=""
                  id=""
                  className="form-control shadow-none bg-transparent outline-none border-none"
                >
                  <option value="hhd">djf</option>
                  <option value="dfd">djkjf</option>
                  <option value="dfjfkj">fdfdkj</option>
                </select>
                <Icon name="down-arrow" />
              </div>
            </div>
          ))}

        {courseData?.course?.map((e, i) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3" key={i}>
            <div className="course__card__container px-2">
              <div className="course__card__image__container">
                <img src={e?.thumbnail} alt="course" />
              </div>
              <div className="course__card__wrapper">
                <h6 className="course__card__descriptions__tag mb-3">
                  {e.level}
                </h6>
                <h6 className="course__card__descriptions__title">{e.title}</h6>
                <div className="course__card__info__container flex-between my-3">
                  <div className="flex">
                    <Icon name="star" />
                    <h6 className="course__card__info__title ms-2 mt-2">4.5</h6>
                  </div>
                  <div className="flex">
                    <Icon name="user" />
                    <h6 className="course__card__info__count mt-2 mx-2">
                      {(Math.random() * 100).toFixed(0)}students
                    </h6>
                  </div>
                </div>
                <div className="flex-between course__card__bottom__container pb-3 pt-2">
                  <h6 className="course__card__info__price">
                    {formatMoney('3000')}
                  </h6>

                  <div
                    ref={closeRef}
                    className="course__card__info__options pointer position-relative px-1"
                    onClick={() => {
                      courseOption === i
                        ? setCourseOption(null)
                        : setCourseOption(i);
                    }}
                  >
                    <Icon name="dots" />
                    {courseOption === i && (
                      <div className="course__options__dropdown">
                        <div className="ms-3">
                          <h6 className="course__options__dropdown__list">
                            View Course
                          </h6>
                          <h6 className="course__options__dropdown__list">
                            Edit Course
                          </h6>
                          <h6 className="course__options__dropdown__list">
                            Delete Course
                          </h6>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default React.memo(AdminCourse);
