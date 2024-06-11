import React from "react";

import image1 from "../assets/img/gallery/vigsel/vigsel1.jpg";
import image2 from "../assets/img/gallery/vigsel/vigsel2.jpg";
import image3 from "../assets/img/gallery/vigsel/vigsel3.jpg";
import image4 from "../assets/img/gallery/vigsel/vigsel4.jpg";
import image5 from "../assets/img/gallery/vigsel/vigsel5.jpg";
import image6 from "../assets/img/gallery/vigsel/vigsel6.jpg";
import image7 from "../assets/img/gallery/vigsel/vigsel7.jpg";
import image8 from "../assets/img/gallery/vigsel/vigsel8.jpg";
import image9 from "../assets/img/gallery/vigsel/vigsel9.jpg";
import image10 from "../assets/img/gallery/vigsel/vigsel10.jpg";

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

export default function Vigsel() {
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
}
