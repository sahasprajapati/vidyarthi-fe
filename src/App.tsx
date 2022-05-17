import React from 'react';
import { AdminCourse, AdminDashboard } from 'pages/Admin';
import { Route, Routes } from 'react-router-dom';

// ehehe

/**
 * Main app compinet and returns the
 * @author prashant
 */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AdminDashboard />} path="/" />
        <Route element={<AdminCourse />} path="/admin-course" />
      </Routes>
    </div>
  );
}

export default App;
