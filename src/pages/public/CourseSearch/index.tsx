import Icon from 'assets/svg/Icon';
import { Accordion, CourseCard, NavBar } from 'components';
import Heading from 'components/heading';
import { Footer } from 'containers';
import useFetch from 'hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCourse, selectCourse } from 'redux/actions/course.action';
import { courseConstant } from 'redux/actions/course.constant';
import { CourseReducer } from 'redux/reducers/course.reducer';

const CourseSearch: React.FC = () => {
  const dispatch: any = useDispatch();
  const courseData: CourseReducer = useSelector((state: any) => state.course);

  const [searchText, setSearchText] = React.useState('');

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

  const { data: categoryData } = useFetch('/category');
  const { data: instructorData } = useFetch('/user/instructor');

  const navigate = useNavigate();

  const newString = 'prashant khanal';

  console.log('-----', newString.charAt(0).split(' ').join('').toUpperCase());

  const filterCourseData = courseData.course
    ? courseData?.course.filter((item) => {
        if (searchText === '') {
          return item;
        } else {
          return item?.title.toLowerCase().includes(searchText.toLowerCase());
        }
      })
    : [];

  return (
    <div className="bg-home">
      <div className="container">
        <NavBar />
        <div className="row">
          <div
            className="
          col-lg-4 my-4"
          >
            <label htmlFor="" className="label__course__search mb-1">
              Search:
            </label>
            <div className="flex course__search__container">
              <Icon name="search" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for courses..."
                className="form-control shadow-none bg-transparent outline-none border-none"
                value={searchText}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchText(event?.target?.value)
                }
              />
            </div>
          </div>
          <div
            className="
          col-lg-2 col-md-4  my-4"
          >
            <label htmlFor="" className="label__course__search mb-1">
              Sort By:
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
          <div
            className="
          col-lg-2 col-md-4  my-4"
          >
            <label htmlFor="" className="label__course__search mb-1">
              Instructor:
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
          <div
            className="
          col-lg-2 col-md-4 my-4"
          >
            <label htmlFor="" className="label__course__search mb-1">
              Category:
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
          <div
            className="
          col-lg-2 col-md-4  my-4"
          >
            <label htmlFor="" className="label__course__search mb-1">
              Sort by:
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
          {/* category and bottom section */}
          <div className="col-md-3">
            <div className="category__container my-3">
              <Accordion title="Category">
                {categoryData?.data?.map((e: any) => (
                  <div className="flex-between" key={e?.id}>
                    <div className="flex">
                      <input
                        type="checkbox"
                        name={e?.name}
                        value={e?.id}
                        // onChange={handleInputChange}
                        id="checkedCategory"
                      />
                      <p className="f-16 mt-3 ps-3"> {e?.name} </p>
                    </div>
                    {/* <div className="course__category__count__container">
                      <p className="text-center mt-1 course__category__count">
                        {e?.count}
                      </p>
                    </div> */}
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="col-md-9">
            <div className="my-3">
              <Heading title={`Search Result (${filterCourseData?.length})`} />

              <div className="row">
                {filterCourseData.map((course, i) => {
                  return (
                    <div
                      className="col-md-4"
                      key={i}
                      onClick={() => {
                        dispatch(selectCourse(course));
                        navigate(`/course-detail/${course.id}`);
                      }}
                    >
                      <CourseCard
                        isCourseDisplay="yes"
                        title={course.title}
                        descriptions={course.description ?? undefined}
                        courseTag={course?.level as unknown as string}
                        price={'$' + (course?.price ?? 0)}
                        imageUrl={course?.thumbnail}
                        icon={<Icon name="arrow-right" />}
                        isPrice="yes"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default React.memo(CourseSearch);
