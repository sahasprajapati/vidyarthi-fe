import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CourseCard, NavBar } from 'components';
import Icon from 'assets/svg/Icon';
import Heading from 'components/heading';
import MainHeading from 'components/main-heading';
import {
  Avatar,
  Certificate,
  Crown,
  Fire,
  HomePageCourse,
  JoinUS,
  Phone,
  Tick,
  Video,
} from 'assets/images';
import HomeCard from './components/HomeCard';
import { Footer } from 'containers';
import Service from 'setup/network';
import { useNavigate } from 'react-router-dom';

export const settings = {
  dots: false,
  arrow: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Home: React.FC = () => {
  const controlRef = React.useRef<any>(null);

  const [popularCourses, setPopularCourses] = useState<any>([]);

  const navigate = useNavigate();
  useEffect(() => {
    Service.get('/course/popular').then((res) => {
      setPopularCourses(res.data.data);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="home__container">
        <div className="container px-4 ">
          <NavBar variant="black" />
          <div className="row">
            <div className="col-lg-6">
              <div className="homepage__leftside__container">
                <h1 className="homepage__leftside__heading">
                  Learning that gets you
                </h1>
                <h6 className="homepage__leftside__subheading">
                  Skills for your present (and your future). Get started with
                  us.
                </h6>
                <div className="homepage__leftside__search flex">
                  <input name="" id="" placeholder="Search for anything" />
                  <div className="homepage__leftside__search__icon flex-center pointer">
                    <Icon name="search" fill="#FFFFFF" />
                  </div>
                </div>
              </div>
              <div className="my-5">
                <Heading title="Authentic content" />
                <Heading title="from the most trusted names." />
              </div>
            </div>
            <div className="col-lg-6 overflow-hidden">
              <div className="flex h-100">
                <img
                  src={HomePageCourse}
                  alt="home-page-course"
                  className="home__page__first__image__course me-2"
                />
                <img
                  src={HomePageCourse}
                  className="home__page__second__image__course me-2"
                />
                <img
                  src={HomePageCourse}
                  className="home__page__third__image__course me-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* course list section */}
      <div className="home__page__course__container ">
        <div className="container">
          <div className="pt-5 flex-between">
            <MainHeading title="Most Popular Courses" />
            <div className="flex">
              <div
                className="homepage__move__course__icon pointer flex-center me-5"
                onClick={() => controlRef.current.slickPrev()}
              >
                <Icon name="arrow-left" fill="#111" />
              </div>
              <div
                className="homepage__move__course__icon pointer flex-center"
                onClick={() => controlRef.current.slickNext()}
              >
                <Icon name="arrow-right" fill="#ffffff" />
              </div>
            </div>
          </div>
          <div className="my-5">
            <Slider ref={controlRef} {...settings}>
              {popularCourses?.map((course: any, i: number) => (
                <div
                  key={i}
                  onClick={() => {
                    navigate(`/course-detail/${course?.id}`);
                  }}
                >
                  <CourseCard
                    types="cursoul"
                    isCourseDisplay="yes"
                    title={course?.title}
                    descriptions={course?.description}
                    courseTag={course?.level}
                    isPrice="yes"
                    price={course?.price}
                    isIcon={course?.price ? 'yes' : 'no'}
                    imageUrl={course?.thumbnail}
                    icon={<Icon name="arrow-right" />}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="home__page__details container">
        <div className="flex-center my-5">
          <MainHeading title="Why you will love learning with Vidyarthi" />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <HomeCard
              title="Flexible Learning "
              image={Fire}
              text="Lessons are tailored made to help you learn at your own level and pace. No More hassle for Live Classes."
            />
            <HomeCard
              title="Visually Immersive"
              image={Tick}
              text="Our courses are designed to make full use of visuals and animation to get you to learn in the most effective and efficient way."
            />
          </div>
          <div className="col-lg-6  position-relative flex-center home__display__image">
            <div className=" mt-5">
              <img src={Certificate} alt="certificate" className="mt-5" />
            </div>
            <img
              src={Phone}
              alt="phone"
              className="position-absolute top-50 end-50 w-50"
            />
            <img
              src={Video}
              alt="video"
              className="position-absolute top-50 start-50 w-50"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <HomeCard
              title="Industry Relevant Curriculum"
              image={Crown}
              text="Learn from people who are actually working in the industry along with their insights and experiences."
            />
            <HomeCard
              title="Have Fun With It"
              image={Avatar}
              text="Our courses are designed to be interactive with interesting quizzes and case studies. They are designed to be in a binge-able format so you can learn and not get bored."
            />
          </div>
        </div>
      </div>
      {/* join us */}
      <div className="join__us__container py-5">
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-lg-6 join__us__image__container">
              <img src={JoinUS} alt="join-us" className="me-2" />
            </div>
            <div className="col-lg-6">
              <div className="mt-5 ms-5">
                <h1 className="join__us__title">Join Us!</h1>
                <p className="join__us__subtitle">
                  Subscribe to our weekly newsletter and be a part of our
                  journey to self discovery and love.
                </p>
                <div className="homepage__join__us__search flex">
                  <input name="" id="" placeholder="Your Email" />
                  <button
                    className="homepage__join__us__btn flex-center pointer"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Home);
