import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/guest-book" element={<GuestBookPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="*" element={<MissingPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
