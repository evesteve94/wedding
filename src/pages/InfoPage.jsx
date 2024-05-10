import React from "react";
import {
  FaInfoCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaUserTie,
  FaTrain,
  FaRing,
  FaHome,
  FaHotel,
  FaMapMarkerAlt,
  FaTaxi,
  FaGlassCheers,
  FaGift,
  FaPizzaSlice,
} from "react-icons/fa";

const InfoPage = () => {
  return (
    <main>
      <div className="info-page">
        <h2>
          {" "}
          <FaInfoCircle /> Information <FaInfoCircle />{" "}
        </h2>
        <h3>Praktisk Information</h3>
        <div className="short-info">
          <p>
            {" "}
            <FaCalendarAlt />
            <span style={{ fontWeight: "bold" }}>Datum</span> : Fredagen 7:e
            juni till Söndagen 9:e juni
          </p>
          <p>
            {" "}
            <FaRing /> <span style={{ fontWeight: "bold" }}>Vigsel</span>:
            Lördagen 8:e juni klockan 15:00
          </p>
          <p>
            {" "}
            <FaMapMarkerAlt />{" "}
            <span style={{ fontWeight: "bold" }}>Adress</span>: Sjöröds
            Lägerområde, Gyllebo 116, Gärsnäs
          </p>
          <p>
            {" "}
            <FaUserTie /> <span style={{ fontWeight: "bold" }}>Klädkod</span>:
            Finkläder, badkläder, sköna (oömtåliga) skor
          </p>
          <p>
            <FaGift /> <span style={{ fontWeight: "bold" }}>Gåvor</span>: Inga
            fysiska gåvor, men gärna bidrag till vår Japanresa
          </p>
          <p>
            {" "}
            <FaHome /> <span style={{ fontWeight: "bold" }}>Boende</span>: 66
            sovplatser på gården + tältplatser
          </p>
          <p>
            <FaHotel /> <span style={{ fontWeight: "bold" }}>Hotell</span>:{" "}
            <a target="blank" href="https://villahasselbacken.se/">
              Villa Hasselbacken
            </a>{" "}
            eller{" "}
            <a target="blank" href="https://www.stockeboda.se/">
              Stockeboda Gård
            </a>
          </p>
          <p>
            <FaGlassCheers />{" "}
            <span style={{ fontWeight: "bold" }}>Toast Masters</span>: Filippa &
            Hampus{" "}
            <a href="mailto:filippa.hampus.tm@gmail.com">
              <FaEnvelope />
            </a>
          </p>
          <p>
            {" "}
            <FaTrain /> <span style={{ fontWeight: "bold" }}>Transport</span>:
            Transport på lördag kväll till tåget i Gärsnäs kommer finnas. Sista
            tåget går 22:20 och transport dit avgår 21:50, meddela om Ni behöver
            plats.
          </p>
          <p>
            {" "}
            <FaTaxi />
            <span style={{ fontWeight: "bold" }}>Taxi</span>: Kommer finnas
            förbokat under lördagskvällen. Mer information om detta kommer att
            presenteras under dagen.
          </p>
          <p>
            <FaPizzaSlice /> <span style={{ fontWeight: "bold" }}>Mat</span>:
            Tilltugg och Middagsbuffe på lördagen utlovas på lördagen, tillagat
            av bästa farbrorn Kjell! Övrig mat ansvar gästerna för.
          </p>
        </div>
        <h3>Om Oss</h3>
        <p>
          Viktor Björling och Emma Thorén träffades den 22 april 2017. Deras
          gemensamma vänner träffades på Tallriken i Pildammarna för att njuta
          av vårsolen och dricka Bloody Marys. När Viktors såg Emma för första
          gången rann det blandad sås ner för hennes arm medan hon ståendes åt
          en falafel, det var kärlek vid första ögonkastet.{" "}
        </p>
        <p>
          {" "}
          Efter flera år av kärlek först på distans, med helgens sång och dans,
          från särbos till sambos i Malmö, med minnen i sol och snö, var de
          tillbaka där på Tallriken fem år senare, den 22 april 2022. Solen
          sken, Bloody Marys dracks och en fråga ställdes med ett ja till svars.
          Den 8 juni 2024 är det äntligen dags att fira detta fina par med er,
          underbara gäster! Dans, musik, god mat och utmärkt sällskap utlovas.
          Varmt välkomna till vårt bröllop!
        </p>
        <h3>
          Med Stor Kärlek och Respekt, <br />
          Viktor & Emma
        </h3>

        <h3>LET'S A-GOOOO</h3>
      </div>
    </main>
  );
};

export default InfoPage;
