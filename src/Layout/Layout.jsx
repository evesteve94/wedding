import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InfoPage from "../pages/InfoPage";
import SchedulePage from "../pages/SchedulePage";
import GuestBookPage from "../pages/GuestBookPage";
import GalleryPage from "../pages/GalleryPage";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/guest-book" element={<GuestBookPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
};

export default Layout;