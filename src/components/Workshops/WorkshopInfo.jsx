import React from "react";
import styled from "styled-components";

import RegisterButton from "./RegisterButton";

const WorkshopInfoStyled = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default function WorkshopInfo({ date, name, link }) {
  return (
    <WorkshopInfoStyled>
      <h6>{date}</h6>
      <h2>{name}</h2>
      <RegisterButton link={link} />
    </WorkshopInfoStyled>
  );
}
