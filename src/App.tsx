import React from 'react';
import {
  AdminAddCourse,
  AdminCourse,
  AdminDashboard,
  AdminTransaction,
  CourseDetail,
  CourseSearch,
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
} from 'pages';
import PrivateRoute from 'PrivateRoute';

import { Route, Routes } from 'react-router-dom';
import { isUserLoggedIn } from 'redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';

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

  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Home />} path="/" />
        <Route element={<NotFound />} path="/*" />
        <Route element={<CourseSearch />} path="/course-search" />
        <Route element={<Setting />} path="/setting" />
        <Route element={<CourseDetail />} path="/course-detail" />

        <Route element={<AdminDashboard />} path="/admin" />

        <Route element={<StudentDashBoard />} path="/dashboard" />

        <Route element={<AdminAddCourse />} path="/admin-course-add" />

        <Route element={<AdminTransaction />} path="/admin-transaction" />

        <Route element={<AdminTransaction />} path="/admin-transaction" />

        <Route element={<AdminCourse />} path="/admin-course" />

        <Route element={<StudentCourse />} path="/student-course" />

        <Route element={<StudentAchievements />} path="/achievements" />

        <Route element={<TeacherDashboard />} path="/teacher" />

        <Route element={<TeacherTransaction />} path="/teacher-transaction" />

        <Route element={<StudentCart />} path="/student-cart" />

        <Route element={<StudentDashBoard />} path="/student-dashboard" />
      </Routes>
    </div>
  );
}

export default App;
