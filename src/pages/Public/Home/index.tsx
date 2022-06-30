import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CourseCard, NavBar } from 'components';
import Icon from 'assets/svg/Icon';
import Heading from 'components/Heading';
import MainHeading from 'components/MainHeading';
import {
  Avatar,
  Certificate,
  Crown,
  Fire,
  JoinUS,
  Phone,
  Tick,
  Video,
} from 'assets/images';
import HomeCard from './components/HomeCard';
import { Footer } from 'containers';

const settings = {
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
            <div className="col-lg-6">hello</div>
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
              {Array(20)
                .fill('')
                .map((_, i) => (
                  <CourseCard
                    key={i}
                    types="cursoul"
                    isCourseDisplay="yes"
                    title="How to become a good designer"
                    descriptions="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid harum sequi vero obcaecati, reiciendis dignissimos culpa quisquam non odio veritatis."
                    courseTag="Design Course"
                    isPrice="yes"
                    price="$22"
                    isIcon="yes"
                    imageUrl="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                    icon={<Icon name="arrow-right" />}
                  />
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
