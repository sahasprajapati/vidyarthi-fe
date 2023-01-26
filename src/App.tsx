import React from 'react';
import {
  AdminAddCourse,
  AdminCourse,
  AdminDashboard,
  AdminTransaction,
  CourseDetail,
  CourseSearch,
  FAQ,
  Home,
  Login,
  NotFound,
  Register,
  Setting,
  StudentAchievements,
  StudentCart,
  StudentCourse,
  StudentDashBoard,
  TeacherDashboard,
  TeacherTransaction,
  AboutUs,
  PrivacyPolicy,
  TermsAndConditions,
  ContactUs,
} from 'pages';
import PrivateRoute from 'PrivateRoute';

import { Route, Routes } from 'react-router-dom';
import { isUserLoggedIn } from 'redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollToTop } from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ehehe

/**
 * Main app compinet and returns the
 * @author prashant
 */

function App() {
  const dispatch: any = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  console.log('this is auth', auth);
  React.useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Home />} path="/" />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<PrivacyPolicy />} path="/privacy-policy" />
        <Route element={<TermsAndConditions />} path="/terms-conditions" />
        <Route element={<FAQ />} path="/faq" />
        <Route element={<ContactUs />} path="/contact-us" />
        <Route element={<NotFound />} path="/*" />
        <Route element={<CourseSearch />} path="/course" />
        <Route element={<CourseDetail />} path="/course-detail/:courseId" />

        <Route element={<PrivateRoute allowedRoutes={['student']} />}>
          <Route element={<StudentCourse />} path="/student-course" />

          <Route element={<StudentCart />} path="/student-cart" />

          <Route element={<StudentDashBoard />} path="/student-dashboard" />
          <Route element={<StudentDashBoard />} path="/dashboard" />

          <Route element={<StudentAchievements />} path="/achievements" />
        </Route>
        <Route element={<PrivateRoute allowedRoutes={['instructor']} />}>
          <Route element={<TeacherDashboard />} path="/teacher" />

          <Route element={<TeacherTransaction />} path="/teacher-transaction" />
        </Route>

        <Route element={<PrivateRoute allowedRoutes={['super']} />}>
          <Route element={<AdminAddCourse />} path="/admin-course-add" />
          <Route element={<AdminTransaction />} path="/admin-transaction" />
          <Route element={<AdminTransaction />} path="/admin-transaction" />
          <Route element={<AdminCourse />} path="/admin-course" />
          <Route element={<AdminDashboard />} path="/admin" />
        </Route>
        <Route
          element={
            <PrivateRoute allowedRoutes={['super', 'instructor', 'student']} />
          }
        >
          <Route element={<Setting />} path="/setting" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
