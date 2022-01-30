import React, { useEffect, useRef } from "react";
import "./HomePage.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export const HomePage = () => {
  useEffect(() => AOS.init());

  const executeScroll = (id) => {
    document.getElementById(id).scrollIntoView(true);
    // let el = document.getElementById(id);
    // el.scrollIntoView(true);
    // document.getElementById(id).scrollTop += 64;
  };

  return (
    <>
      <header>
        <div className="menu-left">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/PrintItText.jpg"} />
          </div>
          <div className="menu-item" onClick={() => executeScroll("home")}>
            Home
          </div>
          <div className="menu-item" onClick={() => executeScroll("aboutus")}>
            PrintIt3D
          </div>
          <div className="menu-item" onClick={() => executeScroll("offer")}>
            Oferta
          </div>
          <div className="menu-item" onClick={() => executeScroll("gallery")}>
            Galeria
          </div>
          <div className="menu-item" onClick={() => executeScroll("pricing")}>
            Cennik
          </div>
          <div className="menu-item" onClick={() => executeScroll("contact")}>
            Kontakt
          </div>
        </div>
      </header>
      <main>
        <div className="intro" id="home">
          <div className="intro-image">
            <img src={process.env.PUBLIC_URL + "/logo.png"} />
          </div>
          <div className="intro-text-container">
            <div className="intro-text">
              Zespół doświadczonych
              <span style={{ fontWeight: "bolder" }}>inżynierów</span>{" "}
              kontroluje proces druku na każdym etapie, gwarantując najwyższej
              jakości rezultaty dla Ciebie oraz Twojej firmy.
              <p>Ty masz pomysł - my tworzymy jego rozwiązanie!</p>
            </div>
          </div>
        </div>
        <section id="aboutus" className="about-us">
          <div className="about-container">
            <div className="item">
              <div className="icon">
                <i class="fa fa-users" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h1>Personel!</h1>
                Posiadamy Zespół inżynierów,
                <br />
                Który zoptymalizuje rozwiązanie Twoich potrzeb.
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h1>Jakość!</h1>
                Zapewniamy najwyższą jakość
                <br />
                oferowanych przez nas produktów.
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              <div className="text">
                <h1>Terminowość!</h1>
                Gwarantujemy wykonanie
                <br />
                Państwa zlecenia zgodnie z ustaleniami czasowymi.
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="fas fa-coins"></i>
              </div>
              <div className="text">
                <h1>Cena!</h1>
                Gwarantujemy najwyższy stosunek jakości do ceny.
                <br />
                Przekonaj się sam!
              </div>
            </div>
          </div>
        </section>
        <section data-aos="zoom-in-left">
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
                <i class="fa fa-motorcycle" aria-hidden="true"></i>
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
        <div className="heading" id="offer">
          <h1 style={{ letterSpacing: "0.6px" }}>Nasze oferty</h1>
          <div className="border-short"></div>
          <p
            style={{
              color: "grey",
              fontStyle: "italic",
              textAlign: "center",
              maxWidth: "1024px",
            }}
          >
            Najczęstsze zastosowanie druku 3D. Sposoby wykorzystania potencjału
            drukowania 3D w prototypowaniu, w produkcji narzędzi i przyrządów
            oraz w produkcji seryjnej.
          </p>
        </div>
        <section data-aos="fade-left">
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
                {/* <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div> */}
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Dowiedz się więcej
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-right">
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
                {/* <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div> */}
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
        <section data-aos="fade-left">
          <div className="content-container">
            <div className="content-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgiEQG5JJIzQpNDlNBvqQJnFyydoBtLwnPA&usqp=CAU" />
            </div>
            <div className="content">
              <div className="header">
                <h1>Doradztwo</h1>
              </div>
              <div className="text">
                Doradztwo w zakresie technologii druku 3D to usługa, w ramach
                której dobierane są odpowiednie parametry druku i optymalne
                materiały techniczne. Pierwszym etapem jest identyfikacja
                potrzeb klienta. Następnie dobierane są odpowiednie materiały i
                parametry procesu drukowania. Ostatnim etapem jest stworzenie
                bezpłatnej wyceny usługi druku 3D.
              </div>
              <div className="usage">
                <h1>Zakres</h1>
                <ul>
                  <li>Dobór materiałów</li>
                  <li>Dobór parametrów</li>
                  <li>
                    <span style={{ color: "#F0E68C" }}>Darmowa wycena</span>
                  </li>
                </ul>
              </div>
              <div className="menu">
                {/* <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div> */}
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Dowiedz się więcej
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-right">
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
                {/* <div className="menu-button">
                  <i class="fas fa-tags"></i> Cennik
                </div> */}
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
        <section data-aos="zoom-in" className="gallery" id="gallery">
          <div className="heading heading-galery">
            <h1 style={{ letterSpacing: "0.6px" }}>Galeria</h1>
            <div className="border-short"></div>
          </div>
          <div className="pic-grid">
            <img src={process.env.PUBLIC_URL + "/Assets/szkola4.jpg"} />
            <img src={process.env.PUBLIC_URL + "/Assets/3.jpg"} />
            <img src={process.env.PUBLIC_URL + "/Assets/Image3.jpg"} />
            <img src={process.env.PUBLIC_URL + "/Assets/3D-printing.jpg"} />
            <img src={process.env.PUBLIC_URL + "/Assets/ar2.jpg"} />
            <img src={process.env.PUBLIC_URL + "/Assets/ar1.png"} />
            <img src={process.env.PUBLIC_URL + "/Assets/2.jpg"} />
            <img src={process.env.PUBLIC_URL + "/Assets/Octopi.jpg"} />
            <div>&nbsp;</div>
            <img src={process.env.PUBLIC_URL + "/Assets/IMG_0781.jpg"} />
            <img src={process.env.PUBLIC_URL + "/Assets/IMG_1635.jpg"} />
          </div>
        </section>
        <section data-aos="fade-left" id="pricing">
          <div className="content-container">
            <div className="content-image no-border">
              <img src="https://static.vecteezy.com/system/resources/previews/002/238/008/non_2x/fixed-cost-or-price-icon-vector.jpg" />
            </div>
            <div className="content">
              <div className="header header-pricing">
                <h1>Ceny są ustalamy indywidualnie</h1>
                <div className="border-short"></div>
                <h2 style={{ color: "var(--MediumDark)" }}>
                  Skontaktuj sie z nami!
                </h2>
                <i
                  class="fas fa-arrow-down"
                  style={{
                    color: "var(--Dark)",
                    fontSize: "3em",
                    marginTop: "0.5em",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-container" id="contact">
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
                <i class="fas fa-phone-alt"></i> <span>+48</span> 500 000 123
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
