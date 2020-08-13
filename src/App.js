import React from "react";
import "normalize.css";
import "./App.css";

import WorkshopList from "./components/Workshops/WorkshopList";
import TeamList from "./components/Team/TeamList";
import Header from "./components/Header/Header";
import BootcampContent from "./components/Bootcamp/BootcampContent";

function App() {
  return (
    <div className="App">
      {/*Header animation and text */}
      <Header />

      <main className="workshops-section margin-bottom" id="workshops-section">
        <h2 className="section-title text-center">workshops</h2>
        <WorkshopList className="section" />
      </main>
      {/* Main content workshops */}

      <section
        className="bootcamp-section margin-bottom text-center"
        id="bootcamp-section"
      >
        <h2 className="section-title text-center">Bootcamp</h2>
        <BootcampContent />
      </section>
      {/* Bootcamp Section */}

      <section class="us-section margin-bottom" id="us-section">
        <h2 class="section-title text-center">nuestro equipo</h2>
        <div class="us-container section">
          <TeamList />
        </div>
      </section>

      <script></script>
    </div>
  );
}

export default App;
