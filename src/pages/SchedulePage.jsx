import React from "react";
import {
  FaCalendarAlt,
  FaGlassCheers,
  FaRing,
  FaDice,
  FaMusic,
  FaUtensils,
} from "react-icons/fa";

const SchedulePage = () => {
  return (
    <main>
      <div className="schedule-page">
        <h2>
          {" "}
          <FaCalendarAlt /> Schema <FaCalendarAlt />
        </h2>
        <h3>Fredag 7 juni</h3>
        <p>
          Ankomst! Ca. 50 gäster ankommer redan på fredagen. Det är BYO mat som
          gäller och frilek! Det finns stora grillplater med gott om kol, så det
          är bara att lägga vad ni vill på grillen!
        </p>
        <p>
          Alla tidiga gäster är också välkomna att "samskapa" och bidra till
          bröllopet genom att bygga, bära, fixa och rodda! All hjälp uppskattas
          enormt 💜
        </p>
        <h3>Lördag 8 juni</h3>
        <p>
          {" "}
          Frukost och Lunch är BYO! Det finns en del mysiga kaffer och
          matplatser i området som går att läsa om{" "}
          <a
            href="https://www.tripadvisor.se/RestaurantsNear-g4266462-d4389207-Garsnas_Station-Garsnas_Skane_County.html"
            target="blank"
          >
            HÄR
          </a>
        </p>
        <p>
          {" "}
          Innan vigseln är det fritt fram att bada i sjön, promenera i skogen
          och bara umgås med alla fantastiska människor som kommer finnas på
          plats.{" "}
        </p>

        <FaCalendarAlt style={{ fontSize: "1.5rem" }} />
        <p style={{ fontSize: "1.5rem" }}>
          {" "}
          15:00 - Vigsel <FaRing />{" "}
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          15:30 - Fördrink med snittar över snittet <FaGlassCheers />{" "}
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          {" "}
          16:30 - Femkamp! <FaDice />
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          {" "}
          18:00 - Middagsbuffé och tal <FaUtensils />{" "}
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          {" "}
          21:30ish - Fest & dans med hemlig line-up av DJs hela natten lång{" "}
          <FaMusic />
        </p>
        <FaCalendarAlt style={{ fontSize: "1.5rem" }} />
        <h3>Söndag 9 juni</h3>
        <p>10:00-14:00 - Gemensam frukost</p>
        <p>Avgång för gäster - TBA</p>

        <h3>LET'S A-GOOOO</h3>
      </div>
    </main>
  );
};

export default SchedulePage;
