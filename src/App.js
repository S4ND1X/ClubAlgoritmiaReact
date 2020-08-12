import React from "react";
import "./App.css";

import WorkshopList from "./components/Workshops/WorkshopList";

function App() {
  return (
    <div className="App">
      <header className="flex-column-center text-center margin-bottom">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
              }}
            ></div>
          </div>
        </div>
        <div className="content flex-column-center">
          <div className="text-container">
            <h1>
              Club <br />
              <span className="highlight">Algoritmia</span> <br />
              GDA
            </h1>
            {/* Header Title */}
          </div>
          <div className="nav-container">
            <nav className="navigation">
              <a href="#bootcamp-section">Bootcamp</a>
              <a href="#workshops-section">Workshops</a>
              <a href="#us-section">Nosotros</a>
            </nav>
            {/* Navigation links */}
          </div>
        </div>
        {/* Navigation container */}
      </header>
      {/*Header animation and text */}

      <main className="workshops-section margin-bottom" id="workshops-section">
        <h2 className="section-title text-center">workshops</h2>
        <WorkshopList className="section"/>
      </main>
      {/* Main content workshops */}

      <section
        className="bootcamp-section margin-bottom text-center"
        id="bootcamp-section"
      >
        <h2 className="section-title text-center">Bootcamp</h2>
        <div className="section">
          <div className="content">
            <h3>¿En qué consiste?</h3>
            <p>
              Programa de 12 semanas durante las cuales desarrollarás un
              proyecto de alto nivel con <span>mentorías personalizadas</span>,
              todo con el fin de que te superes y crezcas tanto personal como
              profesionalmetente.
              <span>¡No importa qué nivel tengas</span>, te podemos ayudar!
            </p>
            <h3>¿POR QUÉ?</h3>
            <p>
              La importancia de los <span>Side Projects</span> en las empresas
              top a nivel mundial es altísima. Aún más cuando no se tiene
              experiencia laboral y se quiere aplicar a un{" "}
              <span>Internship</span>.
            </p>
            <h3>¿REQUISITOS?</h3>
            <p>
              {" "}
              <span>¡Ninguno!</span>
              Únicamente necesitas las ganas de superarte y destacarte.{" "}
              <span>Nada será obligatorio</span> por lo que lo más importante es
              que tú seas el que se rete a sí mismo y quiera salir adelante.
            </p>
            <h3>DEMO DAY</h3>
            <p>
              Al final presentaras tu proyecto ante los mentores y tus
              compañeros para que todos vean de lo que fuiste capaz de crear.
              <span> Pero no tengas miedo, todos estamos para ayudarte</span> y
              hacerte sentir cómodo con el proceso de desarrollo, al final la
              presentación será como estar platicando del proyecto con amigos.
            </p>
          </div>
          <a href="https://forms.gle/BWQ1vZPL8VtPX7yD8" className="text-center">
            QUIERO ENTRAR
          </a>
        </div>
      </section>
      {/* Bootcamp Section */}

      <section class="us-section margin-bottom" id="us-section">
        <h2 class="section-title text-center">nuestro equipo</h2>
        <div class="us-container section">
          <div class="team-container" id="team-container"></div>
        </div>
      </section>

      <script></script>
    </div>
  );
}

export default App;
