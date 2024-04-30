import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <h3 style={{ fontSize: "1.4rem" }}>7 - 9 juni 2024</h3>
      <p>Sjöröds Lägerområde</p>
      <p>Gyllebo 116, Gärsnäs</p>
      <p>&copy;evesteve {currentYear}</p>
      <p>Design: E.T.</p>
    </footer>
  );
};

export default Footer;
