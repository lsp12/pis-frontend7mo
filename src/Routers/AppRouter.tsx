import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeRoutes } from '../Modules/Home/Routes/HomeRoutes';

function AppRouter() {
  return (
    <Routes>
      <Route path="/Home/*" element={<HomeRoutes />} />
      <Route path="*" element={<Navigate to="/Home" />} />
    </Routes>
  );
}

export default AppRouter;
