import React from "./node_modules/react";
import styled from "./node_modules/styled-components";

import WorkshopList from "../components/Workshops/WorkshopList";
import TeamList from "../components/Team/TeamList";
import Header from "../components/Header/Header";
import BootcampContent from "../components/Bootcamp/BootcampContent";
import WorkshopsFilter from "../components/Workshops/WorkshopsFilter";

const LandingPageStyled = styled.div``;

function LandingPage() {
  return (
    <LandingPageStyled>
      {/*Header animation and text */}
      <Header />

      <main className="workshops-section margin-bottom" id="workshops-section">
        <h2 className="section-title text-center">workshops</h2>
        <div className="section">
          <WorkshopsFilter />
          <WorkshopList />
        </div>
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

      <section
        className="margin-bottom"
        id="us-section"
        style={{ paddingTop: "2em" }}
      >
        <h2 className="section-title text-center">nuestro equipo</h2>
        <div className="us-container section">
          <TeamList />
        </div>
      </section>
    </LandingPageStyled>
  );
}

export default LandingPage;
