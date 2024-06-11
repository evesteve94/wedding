import React, { useState } from "react";
import {
  FaImage,
  FaInfoCircle,
  FaEnvelope,
  FaWhatsapp,
  FaCloud,
} from "react-icons/fa";
import Vigsel from "../components/Vigsel";
import Fest from "../components/Fest";
import Rodda from "../components/Rodda";
import Middag from "../components/Middag";
import Mingel from "../components/Mingel";

const GalleryPage = () => {
  const [currentComponent, setCurrentComponent] = useState("Vigsel");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Vigsel":
        return <Vigsel />;
      case "Mingel":
        return <Mingel />;
      case "Middag":
        return <Middag />;
      case "Fest":
        return <Fest />;
      case "Rodda":
        return <Rodda />;
      default:
        return <div>Välj kategori!</div>;
    }
  };

  return (
    <main>
      <div className="gallery-page">
        <h2>
          <FaImage /> Galleri <FaImage />
        </h2>
        <p>Bilder kommer laddas upp efter bröllopet!</p>
        <p>Då kan du logga in på ditt konto för att ta del av galleriet</p>

        <h3>
          <FaInfoCircle /> Skicka gärna era bilder!
        </h3>
        <p>
          Ni får gärna lägga till era bilder i denna Google Drive!! <br />
          <a
            href="https://drive.google.com/drive/folders/1IAiS6Ka4O_UGizm8068MKoFTbl99m2e4?usp=sharing"
            target="blank"
          >
            <p style={{ fontSize: "3rem" }}>
              <FaCloud /> <br />
            </p>
            Google Drive
          </a>
        </p>
        <p>
          <a href="mailto:94evbj42@gmail.com">
            <FaEnvelope style={{ fontSize: "3rem" }} />
          </a>
        </p>
        <p>94evbj42@gmail.com</p>
        <p style={{ fontSize: "3rem" }}>
          <FaWhatsapp />
        </p>
        <p>+46 738 774 11 88</p>
        <br />
        <p>Välj bland kategorierna! - fler bilder kommer snart!</p>
        <nav className="gallery-nav">
          <button onClick={() => setCurrentComponent("Vigsel")}>Vigsel</button>
          <button onClick={() => setCurrentComponent("Mingel")}>Mingel</button>
          <button onClick={() => setCurrentComponent("Middag")}>Middag</button>
          <button onClick={() => setCurrentComponent("Fest")}>Fest</button>
          <button onClick={() => setCurrentComponent("Rodda")}>Rodda</button>
        </nav>
        {renderComponent()}
      </div>
    </main>
  );
};

export default GalleryPage;
