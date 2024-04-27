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
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/guest-book"
            activeclassname="active"
            onClick={toggleMenu}
          >
            Guest Book
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeclassname="active" onClick={toggleMenu}>
            Gallery
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
