import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <header>
        <div className="menu-left">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/PrintItText.jpg"} />
          </div>
          <div className="menu-item">Home</div>
          <div className="menu-item">Cennik</div>
          <div className="menu-item">O nas</div>
          <div className="menu-item">Kontakt</div>
        </div>
      </header>
      <main>
        <div className="intro">
          <div className="intro-image">
            <img src={process.env.PUBLIC_URL + "/logo.png"} />
          </div>
          <div className="intro-text-container">
            <div className="intro-text">
              Zespół doświadczonych
              <span style={{ fontWeight: "bolder" }}>inżynierów</span>{" "}
              kontroluje proces druku na każdym etapie, gwarantując najwyższej
              jakości rezultaty dla Ciebie oraz Twojej firmy. Bez względu na to
              czy jesteś związany z przemysłem, archeologią, medycyną, reklamą,
              nauką czy inną branżą wykonamy model dla Twoich potrzeb
              wykorzystując najnowsze techniki druku 3D.
              <p>Ty masz pomysł - my tworzymy jego rozwiązanie!</p>
            </div>
          </div>
        </div>
        <section>
          <div className="menu-container">
            <div className="option">
              <div className="icon">
                <i class="fas fa-star"></i>
              </div>
              <div className="description">
                <h1>Hobby</h1>
                <p>Klient indywidualny</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div className="description">
                <h1>Materiały dydaktyczne</h1>
                <p>Dla szkól i uczelni</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fas fa-building"></i>
              </div>
              <div className="description">
                <h1>Architektura</h1>
                <p>Części dla twoich projektów w najwyższej jakości</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fas fa-briefcase-medical"></i>
              </div>
              <div className="description">
                <h1>Medycyna</h1>
                <p>Protezy, stuczne szczęki jak i narzędzia </p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Rozrywka i produkcja filmowa </h1>
                <p>Figurki, akcesoria a również zabawki</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Motoryzacja </h1>
                <p>
                  Częsci do twojej maszyny, z twojego modelu lub naszego
                  motoryzacyjnego katalogu
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="heading">
          <h1>Nasze najpopularniejsze oferty</h1>
          <div className="border-short"></div>
          <p style={{ color: "grey", fontStyle: "italic" }}>
            Najczęstsze zastosowanie druku 3D. Dowiedz się, w jaki sposób
            wykorzystać potencjał drukowania 3D w prototypowaniu, w produkcji
            narzędzi i przyrządów oraz w produkcji seryjnej.
          </p>
        </div>
        <section>
          <div className="content-container">
            <div className="content-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU15vn8r9bJIOqtjiKsDo_6DoavT-UC_vxgQ&usqp=CAU" />
            </div>
            <div className="content">
              <div className="header">
                <h1>Projektowanie CAD</h1>
              </div>
              <div className="text">
                Proces techniczny wspomagany komputerowo. Jego zadaniem jest
                stworzenie kompletnej wizualizacji pomysłu, prototypu lub
                finalnego produktu. Podstawowym elementem opracowania zapisu
                dokumentacji konstrukcyjnej jest cyfrowe modelowanie
                geometryczne za pomocą nowoczesnego oprogramowania CAD.
              </div>
              <div className="usage">
                <h1>Zastosowanie</h1>
                <ul>
                  <li>
                    Szybkie i bezproblemowe tworzenie skomplikowanych modeli
                  </li>
                  <li>Gromadzenie projektów na cyfrowych nośnikach danych</li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Dowiedz się więcej
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="content">
              <div className="header">
                <h1>Druk 3D</h1>
              </div>
              <div className="text">
                Technologia przyrostowa opierająca się na ekstruzji
                termoplastycznego tworzywa sztucznego przy pomocy układu
                wytłaczania materiału, tj. modułu ekstrudera oraz głowicy
                drukującej, będącego integralną częścią drukarki 3D. Technologia
                FDM jest najprostszą i najtańszą metodą wytwarzania
                przyrostowego, dzięki czemu nasze pomysły w bardzo szybkim
                tempie stają się rzeczywistością.
              </div>
              <div className="usage">
                <h1>Zastosowanie</h1>
                <ul>
                  <li>Skomplikowane Modele</li>
                  <li>Funkcjonalne prototypy i części</li>
                  <li>
                    Wysokowydajne tworzywa termoplastyczne klasy inżynieryjnej
                  </li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Dowiedz się więcej
                </div>
              </div>
            </div>
            <div className="content-image">
              <img src="https://images.ctfassets.net/dovsnf6qrcem/5xYXTaagt1Mt4yjRWcEans/cf7de41fc2480359318e2e729cb2e759/LAL_8195.jpeg?w=1200&h=871&fl=progressive&q=50&fm=jpg" />
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="content-image">
              <img src="https://i5.walmartimages.com/asr/74c5562e-e4c7-4792-af39-21c6c005e10c.c735bed9976301dc0a02657aa0a5c6f1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />
            </div>
            <div className="content">
              <div className="header">
                <h1>Dorabianie plastikowych części</h1>
              </div>
              <div className="text">
                Świadczymy usługi dorabiania elementów plastikowych w niskich
                seriach, a nawet pojedynczych sztukach. Zaletą druku 3D jest
                brak konieczności tworzenia drogiej formy wtryskowej, wystarczy
                prosty projekt 3D, który dla Ciebie wykonamy. Złamany zawias,
                uszkodzona zębatka? Uszkodzona plastikowa część, która jest
                nieosiągalna? Dostarcz nam swój uszkodzony element, a wykonamy
                dla Ciebie jego zamiennik!
              </div>
              <div className="usage">
                <h1>Zastosowanie</h1>
                <ul>
                  <li>First usage</li>
                  <li>Second one</li>
                  <li>Third crazy</li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Dowiedz się więcej
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="content">
              <div className="header">
                <h1>Druk 3D dla przemysłu</h1>
              </div>
              <div className="text">
                Tworzymy wstępne prototypy, funkcjonalne części, makiety oraz
                narzędzia produkcyjne specjalnie do twoich potrzeb. Zapewniamy w
                pełni skalowalną produkcję. Skorzystaj z doświadczenia ekspertów
                od wytwarzania przyrostowego. Prześlij do nas projekt, a
                otrzymasz bezpłatną poradę w wyborze materiału lub optymalnej
                technologii oraz szczegółową wycenę druku 3D.
              </div>
              <div className="usage">
                <h1>Oferta</h1>
                <ul>
                  <li>
                    Dla małych firm - <span className="offer">Basic</span>
                  </li>
                  <li>
                    Dla średnich firm - <span className="offer">Business</span>
                  </li>
                  <li>
                    Dla dużych firm -{" "}
                    <span className="offer">Advanced Print</span>
                  </li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Dowiedz się więcej
                </div>
              </div>
            </div>
            <div className="content-image">
              <img src="https://images.squarespace-cdn.com/content/v1/51b94f0ce4b01efb8e2bde98/1577746381872-VZRQSD81RSZDFKDDSVS1/TPU-rubber-printed-lattice.gif" />
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="contact">
              <div className="item">
                <i class="fab fa-facebook-square"></i>
                Facebook
              </div>
              <div className="item">
                <i class="fab fa-twitter-square"></i>
                Twitter
              </div>
              <div className="item">
                <i class="fas fa-envelope"></i>
                contact@PrintIt3D.com
              </div>
              <div className="item">
                <i class="fab fa-instagram"></i> Instagram
              </div>
              <div className="item">
                <i class="fas fa-phone-alt"></i> +48 500 000 123
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
