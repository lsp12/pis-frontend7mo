import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

export function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>

  );
}
