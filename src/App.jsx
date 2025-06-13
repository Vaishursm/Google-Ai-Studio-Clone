import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage'; // Assuming HomePage is not primary focus for AI studio clone
import DashboardPage from './pages/DashboardPage'; // This is the main page

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Make DashboardPage the default and only route for simplicity */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/app" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
