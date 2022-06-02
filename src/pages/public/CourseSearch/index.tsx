import Icon from 'assets/svg/Icon';
import { CourseCard, NavBar } from 'components';
import Heading from 'components/Heading';
import { Footer } from 'containers';
import React from 'react';

const CourseSearch: React.FC = () => {
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
              Rating:
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
              {/*  */}
              {/*  */}
              <div className="accordion__container">
                <div className="flex-between">
                  <Heading title="Category" />
                  <Icon name="down-arrow" />
                </div>
                <div className="flex-between">
                  <div className="flex">
                    <input type="checkbox" name="" id="" />
                    <p className="">Programming</p>
                  </div>
                  <p>32</p>
                </div>
                {/*  0*/}
                {/*  */}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="my-3">
              <Heading title="Search Result (30)" />

              <div className="row">
                {Array(9)
                  .fill('')
                  .map((e) => (
                    <div className="col-md-4" key={e}>
                      <CourseCard />
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
