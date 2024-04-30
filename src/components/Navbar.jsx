import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" activeclassname="active" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/info" activeclassname="active" onClick={toggleMenu}>
            Info
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule" activeclassname="active" onClick={toggleMenu}>
            Schema
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/guest-book"
            activeclassname="active"
            onClick={toggleMenu}
          >
            Gästbok
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeclassname="active" onClick={toggleMenu}>
            Galleri
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeclassname="active" onClick={toggleMenu}>
            Login
          </NavLink>
        </li>
      </ul>
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
