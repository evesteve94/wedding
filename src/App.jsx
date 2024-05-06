import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import SchedulePage from "./pages/SchedulePage";
import GuestBookPage from "./pages/GuestBookPage";
import GalleryPage from "./pages/GalleryPage";
import MissingPage from "./pages/MissingPage";
import Authentication from "./pages/Authenticaction.jsx"; // Corrected spelling
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route key="home" index element={<HomePage />} />
          <Route key="info" path="/info" element={<InfoPage />} />
          <Route key="schedule" path="/schedule" element={<SchedulePage />} />
          <Route
            key="guest-book"
            path="/guest-book"
            element={<GuestBookPage />}
          />
          <Route key="gallery" path="/gallery" element={<GalleryPage />} />
          <Route key="login" path="/login" element={<Authentication />} />
          <Route key="missing" path="*" element={<MissingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
