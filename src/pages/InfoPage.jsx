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
          <h4>
            {" "}
            <FaCalendarAlt />
            Datum
          </h4>
          <p> Fredagen 7:e juni till Söndagen 9:e juni</p>
          <h4>
            {" "}
            <FaRing />
            Vigsel
          </h4>
          <p>Lördagen 8:e juni klockan 15:00</p>
          <h4>
            {" "}
            <FaMapMarkerAlt />
            Adress
          </h4>
          <p>Sjöröds Lägerområde, Gyllebo 116, Gärsnäs</p>
          <h4>
            {" "}
            <FaUserTie />
            Klädkod
          </h4>
          <p>Finkläder, badkläder, sköna (oömtåliga) skor</p>
          <h4>
            {" "}
            <FaGift />
            Gåvor
          </h4>
          <p>Inga fysiska gåvor, men gärna bidrag till vår Japanresa</p>
          <h4>
            {" "}
            <FaHome />
            Boende
          </h4>
          <p>
            66 sovplatser på gården + tältplatser. Ta med egna sängkläder!
            Madrasser, kuddar och täcken finns!
          </p>
          <h4>
            {" "}
            <FaHotel />
            Hotell
          </h4>
          <p>
            {" "}
            <a target="blank" href="https://villahasselbacken.se/">
              Villa Hasselbacken
            </a>{" "}
            eller{" "}
            <a target="blank" href="https://www.stockeboda.se/">
              Stockeboda Gård
            </a>
          </p>
          <h4>
            {" "}
            <FaGlassCheers />
            Toast Masters
          </h4>
          <p>
            Maila Filippa & Hampus om ni vill hålla ett tal. Inga spontana tal
            tack!{" "}
            <a href="mailto:filippa.hampus.tm@gmail.com">
              <FaEnvelope />
            </a>
          </p>
          <h4>
            {" "}
            <FaTrain />
            Transport
          </h4>
          <p>
            {" "}
            Transport på lördag kväll till tåget i Gärsnäs kommer finnas. Sista
            tåget går 22:20 och transport dit avgår 21:50, meddela om Ni behöver
            plats.
          </p>
          <h4>
            {" "}
            <FaTaxi />
            Taxi
          </h4>
          <p>
            {" "}
            Kommer finnas förbokat under lördagskvällen. Mer information om
            detta kommer att presenteras under dagen.
          </p>
          <h4>
            {" "}
            <FaPizzaSlice />
            Mat
          </h4>
          <p>
            Tilltugg och Middagsbuffé på lördagen utlovas, tillagat av bästa
            farbrorn Kjell! Övrig mat ansvarar gästerna för, bortsett från
            gemensam frukost på söndagen samt kaffe och te alla dagar.
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
