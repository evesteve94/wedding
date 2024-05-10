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
            Lördagen 8:e juni klockan ???
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
            förbokat mellan 00:00-00:00 för att köra mellan gården och hotellen.
            Nummer:{" "}
          </p>
        </div>
        <h3>Om Oss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fuga temporibus aliquam veritatis quae error exercitationem velit,
          ratione enim quaerat quas porro aut eos libero voluptates. Officia
          recusandae maiores rem!
        </p>
        <h3>Om Er</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fuga temporibus aliquam veritatis quae error exercitationem velit,
          ratione enim quaerat quas porro aut eos libero voluptates. Officia
          recusandae maiores rem!
        </p>
        <h3>Med Stor Kärlek och Respekt</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fuga temporibus aliquam veritatis quae error exercitationem velit,
          ratione enim quaerat quas porro aut eos libero voluptates. Officia
          recusandae maiores rem!
        </p>

        <h3>LET'S GOOOO</h3>
      </div>
    </main>
  );
};

export default InfoPage;
