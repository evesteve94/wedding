import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive
                ? "rgba(211, 227, 226, 1)"
                : "rgba(102, 198, 194, 1)",
              textDecoration: "none",
              fontSize: "1.3rem",
              letterSpacing: "1px",
              padding: "0 0.5rem",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/info"
            style={({ isActive }) => ({
              color: isActive
                ? "rgba(211, 227, 226, 1)"
                : "rgba(102, 198, 194, 1)",
              textDecoration: "none",
              fontSize: "1.3rem",
              letterSpacing: "1px",
              padding: "0 0.5rem",
            })}
          >
            Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedule"
            style={({ isActive }) => ({
              color: isActive
                ? "rgba(211, 227, 226, 1)"
                : "rgba(102, 198, 194, 1)",
              textDecoration: "none",
              fontSize: "1.3rem",
              letterSpacing: "1px",
              padding: "0 0.5rem",
            })}
          >
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/guest-book"
            style={({ isActive }) => ({
              color: isActive
                ? "rgba(211, 227, 226, 1)"
                : "rgba(102, 198, 194, 1)",
              textDecoration: "none",
              fontSize: "1.3rem",
              letterSpacing: "1px",
              padding: "0 0.5rem",
            })}
          >
            Guest Book
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              color: isActive
                ? "rgba(211, 227, 226, 1)"
                : "rgba(102, 198, 194, 1)",
              textDecoration: "none",
              fontSize: "1.3rem",
              letterSpacing: "1px",
              padding: "0 0.5rem",
            })}
          >
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
