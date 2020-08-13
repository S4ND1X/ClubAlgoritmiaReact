import React from "react";
import styled from "styled-components";

const HeaderNavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1em;

  /* Nav links */
  .navigation {
    z-index: 1;
  }
  .navigation a {
    margin-right: 1.2em;
    color: whitesmoke;
    border-bottom: 0.5px none white;
    transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
  }
  .navigation a:last-of-type {
    margin-right: 0;
  }
  .navigation a:hover {
    padding-bottom: 0.5em;
    border-bottom: 1.5px solid white;
  }
`;

export default function HeaderNav() {
  return (
    <HeaderNavStyled>
      <nav className="navigation">
        <a href="#bootcamp-section">Bootcamp</a>
        <a href="#workshops-section">Workshops</a>
        <a href="#us-section">Nosotros</a>
      </nav>
      {/* Navigation links */}
    </HeaderNavStyled>
  );
}
