// App.jsx

import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import SchedulePage from "./pages/SchedulePage";
import GuestBookPage from "./pages/GuestBookPage";
import GalleryPage from "./pages/GalleryPage";
import MissingPage from "./pages/MissingPage";
import Authentication from "./pages/Authenticaction.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/guest-book" element={<GuestBookPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/login" element={<Authentication />} />
        </Route>
        {/* Define a separate route for HomePage outside of the Layout */}

        {/* Fallback route for 404 errors */}
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </div>
  );
}

export default App;
