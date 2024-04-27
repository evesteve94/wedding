import React from "react";
import { Link } from "react-router-dom";
import apple from "../assets/img/apple.png";
import banana from "../assets/img/banana.png";
import bubbles from "../assets/img/bubbles.png";
import { FaGlassCheers } from "react-icons/fa";

const HomePage = () => {
  return (
    <main>
      <div className="welcome-text">
        <h2> Välkomna Kära Gäster!</h2>
        <p>
          Vad fantastiskt roligt det ska bli att fira våran stora dag
          tillsammans med Er! Vi ser otroligt mycket fram emot att dela med oss
          av både dagen, kvällen och alla andra stunder som vi får spendera i
          framtiden med just Er.
        </p>
        <h3>På denna sida kan ni:</h3>
        <ul>
          <li>
            Läsa <Link to="/schedule"> schemat</Link> för helgen
          </li>
          <li>
            Skapa ett konto för att kunna skriva i{" "}
            <Link to="/guest-book"> Gästboken</Link>
          </li>
          <li>
            Läsa mer <Link to="/info"> Information</Link> om det fina paret
          </li>
          <li>
            Se bilder i <Link to="/gallery"> Galleriet</Link> från helgen
          </li>
        </ul>
        <div className="photo-div">
          <img className="homepage-img" src={banana} alt="" />
          <img
            style={{ marginLeft: "2rem" }}
            className="homepage-img"
            src={bubbles}
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
