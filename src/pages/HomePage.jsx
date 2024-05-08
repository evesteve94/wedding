import React from "react";
import { Link } from "react-router-dom";
import apple from "../assets/img/apple.png";
import banana from "../assets/img/banana.png";
import bubbles from "../assets/img/bubbles.png";
import { FaCalendarAlt, FaInfoCircle, FaBook, FaImages } from "react-icons/fa";

const HomePage = () => {
  return (
    <main>
      <div className="welcome-text">
        <h2> Välkomna Kära Gäster!</h2>
        <div className="first-text">
          <p>
            Vad fantastiskt roligt det ska bli att fira våran stora dag
            tillsammans med Er! Vi ser otroligt mycket fram emot att dela med
            oss av både dagen, kvällen och alla andra stunder som vi får
            spendera i framtiden med just Er.
          </p>
          <img
            className="homepage-img"
            src={bubbles}
            alt="Viktor and Emma drinking champagne"
            style={{ marginTop: "1rem" }}
          />
        </div>
        <h2>På denna sida kan ni:</h2>
        <div className="second-text">
          <ul>
            <li>
              <FaCalendarAlt /> Läsa <Link to="/schedule"> schemat</Link> för
              helgen
            </li>
            <li>
              <FaBook /> Skapa ett konto för att kunna skriva i{" "}
              <Link to="/guest-book"> Gästboken</Link>
            </li>
            <li>
              <FaInfoCircle /> Läsa mer <Link to="/info"> Information</Link> om
              det fina paret
            </li>
            <li>
              <FaImages /> Se bilder i <Link to="/gallery"> Galleriet</Link>{" "}
              från helgen
            </li>
          </ul>

          <img className="homepage-img" src={banana} alt="" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
