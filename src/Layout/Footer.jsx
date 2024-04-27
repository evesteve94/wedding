import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p style={{ fontSize: "1.7rem" }}>7 - 9 juni 2024</p>
      <p>Sjöröds Lägerområde</p>
      <p>Gyllebo 116, Gärsnäs</p>
      <p>
        <span style={{ fontSize: "1.7rem" }}>&copy;</span>evesteve {currentYear}
      </p>
      <p>Design: E.T.</p>
    </footer>
  );
};

export default Footer;
