import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

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
          Frukost och Lunch är BYO! Det finns en del mysiga kaffeer och
          matplatser i området som går att läsa om <a>Här</a>
        </p>
        <p>
          {" "}
          Innan vigseln är det fritt fram att bada i sjön, promenera i skogen
          och bara umgås med alla fantaska människor som kommer finnas på plats.{" "}
        </p>
        <p> 15:00 - Vigsel </p>
        <p>15:30 - Fördrink med snittar över snittet </p>
        <p> 16:30 - Femkamp! </p>
        <p> 18:00 - Middagsbuffe och tal </p>
        <p>
          {" "}
          21:30ish - Fest & dans med hemlig line-up av DJs hela natten lång
        </p>
        <h3>Söndag 9 juni</h3>
        <p>10:00-14:00 - Gemensam frukost</p>
        <p>Avgång för gäster - TBA</p>

        <h3>LET'S A-GOOOO</h3>
      </div>
    </main>
  );
};

export default SchedulePage;
