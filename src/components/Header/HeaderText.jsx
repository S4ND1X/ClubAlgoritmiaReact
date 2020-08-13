import React from "react";
import styled from "styled-components";

const HeaderTextStyled = styled.div``;

function HeaderText() {
  return (
    <HeaderTextStyled>
      <h1>
        Club <br />
        <span className="highlight">Algoritmia</span> <br />
        GDA
      </h1>
    </HeaderTextStyled>
  );
}

export default HeaderText;
