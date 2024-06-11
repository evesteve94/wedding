import React from "react";

import image1 from "../assets/img/gallery/mingel/mingel (1).jpg";
import image2 from "../assets/img/gallery/mingel/mingel (2).jpg";
import image3 from "../assets/img/gallery/mingel/mingel (3).jpg";
import image4 from "../assets/img/gallery/mingel/mingel (4).jpg";
import image5 from "../assets/img/gallery/mingel/mingel (5).jpg";
import image6 from "../assets/img/gallery/mingel/mingel (6).jpg";
import image7 from "../assets/img/gallery/mingel/mingel (7).jpg";
import image8 from "../assets/img/gallery/mingel/mingel (8).jpg";
import image9 from "../assets/img/gallery/mingel/mingel (9).jpg";
import image10 from "../assets/img/gallery/mingel/mingel (10).jpeg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Mingel = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="vigsel">
      {images.map((image, index) => (
        <div style={{ width: "100%" }} key={index}>
          <img className="photos" src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <button onClick={scrollToTop}>Upp till Toppen</button>
    </div>
  );
};

export default Mingel;
