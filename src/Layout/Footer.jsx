import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p>
        {" "}
        <span style={{ fontSize: "1.7rem" }}>&copy;</span>evesteve {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
