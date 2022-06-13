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
  StudentDashBoard,
} from 'pages';
import PrivateRoute from 'PrivateRoute';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

// ehehe

/**
 * Main app compinet and returns the
 * @author prashant
 */

function App() {
  const localData = {
    roles: ['admin'],
    accessToken: 'token is valid',
  };

  const localPayload = JSON.stringify(localData);
  window.localStorage.setItem('accessToken', localPayload);
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Home />} path="/home" />
        <Route element={<NotFound />} path="/*" />
        <Route element={<CourseSearch />} path="/course-search" />
        <Route element={<CourseDetail />} path="/course-detail" />
        <Route element={<PrivateRoute allowedRoutes={['admin']} />}>
          <Route element={<AdminDashboard />} path="/" />
        </Route>
        <Route element={<PrivateRoute allowedRoutes={['admin']} />}>
          <Route element={<StudentDashBoard />} path="/dashboard" />
        </Route>
        <Route element={<PrivateRoute allowedRoutes={['admin']} />}>
          <Route element={<AdminAddCourse />} path="/admin-course-add" />
        </Route>
        <Route element={<PrivateRoute allowedRoutes={['admin']} />}>
          <Route element={<AdminTransaction />} path="/admin-transaction" />
        </Route>
        <Route element={<PrivateRoute allowedRoutes={['admin']} />}>
          <Route element={<AdminTransaction />} path="/admin-transaction" />
        </Route>
        <Route element={<PrivateRoute allowedRoutes={['admin']} />}>
          <Route element={<AdminCourse />} path="/admin-course" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{
  /*
</Routes>
 */
}
