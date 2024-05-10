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
            spendera i framtiden med just Er. <br /> <br />
            Men hur ska vi alla få plats att fira detta ihop? På Sjöröds
            Lägerområde så klart! Strax utanför Gärsnäs på Österlen finner ni
            Gyllebosjö där denna fantastiska tillställning kommer äga rum.
            Rustad med sovplatser, tältpotential och festpotential kommer vi
            alla trivas i välbehag. Då många av våra vänner reser från olika
            städer och länder har vi hyrt området från fredagen till söndagen
            (7-9:e juni). Det är fritt fram att anlända redan på fredagen och
            samskapa så att vi alla får en minnesvärd och fantastisk stund
            tillsammans.
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
