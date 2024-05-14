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
  FaParking,
  FaHeart,
  FaCar,
  FaTree,
  FaUtensils,
} from "react-icons/fa";

const InfoPage = () => {
  return (
    <main>
      <div className="info-page">
        <h2>
          {" "}
          <FaInfoCircle /> Praktisk Information <FaInfoCircle />{" "}
        </h2>

        <div className="short-info">
          <p>
            Undertill hittar ni all möjlig information om bröllopet, att hitta
            hit, mat och dryck, samt lägerområdet.{" "}
          </p>
          <p>
            Frågor på det? Maila till viktorochemma.2024@gmail.com{" "}
            <a href="mailto:viktorochemma.2024@gmail.com">
              <FaEnvelope />
            </a>
          </p>
          <h3>
            {" "}
            <FaHeart /> Bröllopet <FaHeart />
          </h3>
          <h4>
            {" "}
            <FaRing />
            Vigsel
          </h4>
          <p>Lördagen 8:e juni klockan 15:00</p>
          <h4>
            {" "}
            <FaUserTie />
            Klädkod
          </h4>
          <p>
            Finkläder, badkläder, sköna (oömtåliga) skor. <br />
            Med detta menas: Ni får ha på er precis vad som helst som ni känner
            er fina och bekväma i! Vi rekommenderar bra skor eftersom det blir
            både dans och ibland träsk-liknande underlag, det är på landet trots
            allt. Handduk och badkläder är ett måste om ni vill bada i sjön
            eller använda bastun!
          </p>
          <h4>
            {" "}
            <FaGift />
            Gåvor
          </h4>
          <p>
            Inga fysiska gåvor önskas, men gärna bidrag till vår Japanresa.{" "}
            <br />
            Ni kan swisha Viktor ett bidrag <br />
            <span style={{ fontWeight: "bold" }}>076 272 06 53</span>{" "}
            <FaHeart />
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

          <h3>
            {" "}
            <FaCar /> Ta Sig Dit & Hem <FaCar />
          </h3>
          <h4>
            {" "}
            <FaMapMarkerAlt />
            Adress
          </h4>
          <p>
            Sjöröds Lägerområde, Gyllebo 116, Gärsnäs. <br />
            Google Maps karta hittar ni{" "}
            <a href="https://maps.app.goo.gl/mDobNt7SQEambFDq6" target="blank">
              HÄR
            </a>{" "}
            <br /> <br />
            En hjälpguide till att hitta hit:{" "}
            <a href="https://www.sjorod.se/hitta-hit/" target="blank">
              KLICKA HÄR
            </a>
            <br /> <br />
            Mer information om Sjöröds lägerplats hittar ni{" "}
            <a href="https://www.sjorod.se/lageromradet/" target="blank">
              HÄR
            </a>
          </p>
          <h4>
            {" "}
            <FaParking /> Bil & Parkering{" "}
          </h4>
          <p>
            För er som kör till bröllopet kan ni utgå från denna{" "}
            <a href="https://maps.app.goo.gl/mDobNt7SQEambFDq6" target="blank">
              karta
              <FaMapMarkerAlt />{" "}
            </a>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Från Malmö: </span> Kör väg 11
            mot Simrishamn. Strax före Gärsnäs tar ni av till vänster mot Östra
            Vemmerlöv. Passera genom Östra Vemmerlöv. Innan skogsbrynet på
            vänster sida hittar ni den skyltade infarten till Sjöröds
            lägerområde.
          </p>

          <p>
            <span style={{ fontWeight: "bold" }}>Från Lund: </span> Kör till
            Dalby och anslut där till väg 11, följ sedan vägbeskrivningen ovan.
          </p>

          <p>
            Ni är välkomna att köra ända fram till gårdshuset för att lasta av
            er packning. En större parkering finns bakom en öppen bom intill
            gården. Det kommer vara skyltat!
          </p>

          <h4>
            {" "}
            <FaTrain />
            Kollektivtraffik
          </h4>
          <p>
            Eftersom lägerområdet ligger mitt ute i skogen, är det en bit att gå
            från närmsta busshållplats. Närmaste järnvägsstation ligger i
            Gärsnäs, 7 kilometer bort. Närmaste busshållplats heter
            <span style={{ fontWeight: "bold" }}> Gyllebosjövägen</span> och
            ligger 2 kilometer från lägerområdet. Bussen som går dit heter{" "}
            <span style={{ fontWeight: "bold" }}>574</span> och avgår från
            Simrishamns station. Man kan åka Pågatåg från Malmö och Ystad, samt
            expressbuss från Lund och Kristianstad. Oavsett om du åker tåg eller
            buss till Simrishamn, ingår alltid resan med buss{" "}
            <span style={{ fontWeight: "bold" }}>574</span> i priset. <br />{" "}
            <br />
            Skjuts från bröllopet till järnvägsstationen på lördag kväll kommer
            erbjudas! Sista tåget går{" "}
            <span style={{ fontWeight: "bold" }}>22:20</span> från Gärsnäs
            järnvägsstation och transport dit avgår{" "}
            <span style={{ fontWeight: "bold" }}>21:50</span>, meddela om Ni
            behöver transport! Maila till viktorochemma.2024@gmail.com{" "}
            <a href="mailto:viktorochemma.2024@gmail.com">
              <FaEnvelope />
            </a>
          </p>
          <h4>
            {" "}
            <FaTaxi />
            Taxi
          </h4>
          <p>
            {" "}
            Taxi kommer finnas förbokat under lördagskvällen genom Österlens
            Taxi. Mer information om detta kommer att presenteras under dagen.
            Kort sagt, kommer taxibilar vara on call för att köra gäster till
            närliggande hotell, tågstationer eller andra platser runt Österlen.
          </p>
          <h3>
            {" "}
            <FaHome /> Boende <FaHome />
          </h3>
          <h4>
            {" "}
            <FaTree />
            Gården
          </h4>
          <p>
            Det finns 66 sovplatser på gården + tältplatser. <br />
            <span style={{ fontWeight: "bold" }}>
              OBS! Ta med egna sängkläder!
            </span>{" "}
            Madrasser, kuddar och täcken finns!
          </p>
          <p>
            Huvudbyggnaden rymmer tre toaletter, varav en är handikappanpassad.
            Huset är försett med wifi. Intill huvudbyggnaden finns det gamla
            boningshuset, lilla huset, som idag inrymmer 4 sovrum med 4-8
            bäddar. Totalt kan 18 personer sova i huset. Övriga sovutrymmen I
            skogsbrynet finns det 2 patrullstugor med totalt 24 bäddar. I ett
            annat hus finns ytterligare 2 rum med 8 sovplatser i varje. Området
            erbjuder även en vedeldad bastu, vedeldad badtunna och vindskydd.
          </p>
          <h4>
            {" "}
            <FaHotel />
            Hotell
          </h4>
          <p>
            {" "}
            Det finns också möjlighet att boka{" "}
            <a target="blank" href="https://villahasselbacken.se/">
              Villa Hasselbacken
            </a>{" "}
            eller{" "}
            <a target="blank" href="https://www.stockeboda.se/">
              Stockeboda Gård
            </a>{" "}
            om man vill garantera en god natts sömn.
          </p>
          <h3>
            {" "}
            <FaUtensils /> Mat & Dryck <FaUtensils />
          </h3>

          <h4>
            {" "}
            <FaPizzaSlice />
            Mat
          </h4>
          <p>
            <span style={{ fontWeight: "bold" }}>Ingår för alla gäster: </span>
            Tilltugg och Middagsbuffé på lördagen utlovas, tillagat av bästa
            farbrorn Kjell! Samt en gemensam frukost inkl. kaffe och te för alla
            trötta och slitna gäster på söndagen.
          </p>

          <p>
            <span style={{ fontWeight: "bold" }}>Ingår inte:</span> Alla övriga
            måltider. Övrig mat ansvarar gästerna för. Det finns stora
            grillplatser på lägerområdet samt mycket kol! Frukost och Lunch är
            alltså BYO (Bring Your Own). Det finns en del mysiga kaffer och
            matplatser i området som går att läsa om{" "}
            <a
              href="https://www.tripadvisor.se/RestaurantsNear-g4266462-d4389207-Garsnas_Station-Garsnas_Skane_County.html"
              target="blank"
            >
              HÄR
            </a>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Allergier: </span> För er som
            har allergier får ni gärna meddela Kjell (emailadress kommer
            snart...). Middagsbuffén kommer ha gott om veganska och
            kött-alternativ och kommer att presenteras under dagen.
          </p>

          <h4>
            {" "}
            <FaGlassCheers /> Dryck
          </h4>
          <p>
            Hela lördagen finns det gott om alternativ inkl. alkoholfritt! Alla
            vinfinsmakare och craft-beer-entusiaster (om ni gillar Pripps)
            kommer vara nöjda! Bubbel och G&T skall även flöda!
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
