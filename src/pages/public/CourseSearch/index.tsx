import Icon from 'assets/svg/Icon';
import { Accordion, CourseCard, NavBar } from 'components';
import Heading from 'components/heading';
import { Footer } from 'containers';
import React from 'react';

const CourseSearch: React.FC = () => {
  const categoryData = [
    {
      id: 0,
      title: 'programming',
      count: 10,
    },
    {
      id: 1,
      title: 'Marketing',
      count: 15,
    },
    {
      id: 2,
      title: 'Web Developemt',
      count: 46,
    },
    {
      id: 3,
      title: 'UI & UX Design',
      count: 26,
    },
    {
      id: 4,
      title: 'Bussiness',
      count: 50,
    },
  ];

  // const [values, setValues] = React.useState({});
  // const newObject = {};
  // const data = categoryData.map((e) => console.log(e.title));

  // console.log('this is object', newObject);
  // console.log('this is data', data);

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];

  // }

  // const newArray = [];

  for (let i = 0; i < categoryData.length; i++) {
    // console.log('this is index', categoryData[i].title.split(' ').join(''));
    // const data = categoryData[i].title.split(' ').join('');
    // const newString = data.split(data.charAt(data.length - 1)).join(': ""');
    // console.log('-----<<', newString);
    // newArray.push(data);
  }
  // console.log('new aerat', newArray);
  // const handleInputChange = (e: HTMLInputElement) => {
  //
  //
  // };n

  const newString = 'prashant khanal';

  console.log('-----', newString.charAt(0).split(' ').join('').toUpperCase());

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
                {categoryData.map((e) => (
                  <div className="flex-between" key={e?.id}>
                    <div className="flex">
                      <input
                        type="checkbox"
                        name={e?.title}
                        value={e?.title}
                        // onChange={handleInputChange}
                        id="checkedCategory"
                      />
                      <p className="f-16 mt-3 ps-3"> {e?.title} </p>
                    </div>
                    <div className="course__category__count__container">
                      <p className="text-center mt-1 course__category__count">
                        {e?.count}
                      </p>
                    </div>
                  </div>
                ))}
              </Accordion>
              <Accordion title="Category">
                {categoryData.map((e) => (
                  <div className="flex-between" key={e?.id}>
                    <div className="flex">
                      <input
                        type="checkbox"
                        name={e?.title}
                        value={e?.title}
                        // onChange={handleInputChange}
                        id="checkedCategory"
                      />
                      <p className="f-16 mt-3 ps-3"> {e?.title} </p>
                    </div>
                    <div className="course__category__count__container">
                      <p className="text-center mt-1 course__category__count">
                        {e?.count}
                      </p>
                    </div>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="col-md-9">
            <div className="my-3">
              <Heading title="Search Result (30)" />

              <div className="row">
                {Array(9)
                  .fill('')
                  .map((e, i) => (
                    <div className="col-md-4" key={i}>
                      <CourseCard
                        isCourseDisplay="yes"
                        title="How to become a good designer"
                        descriptions="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid harum sequi vero obcaecati, reiciendis dignissimos culpa quisquam non odio veritatis."
                        courseTag="Design Course"
                        price="$22"
                        imageUrl="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                        icon={<Icon name="arrow-right" />}
                      />
                    </div>
                  ))}
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
