import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../mainlayout/MainLayout';
import MainPage from '../page/MainPage';
import AboutPage from '../page/AboutPage';
import AdminPage from '../page/AdminPage';

function MainRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
