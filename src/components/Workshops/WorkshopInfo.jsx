import React from "react";
import styled from "styled-components";

import RegisterButton from "./RegisterButton";

import PropTypes from "prop-types";

//Right side of workshop card
export default function WorkshopInfo({ date, name, link }) {
  return (
    <WorkshopInfoStyled>
      <h6>{date}</h6>
      <h2>{name}</h2>
      <RegisterButton link={link} />
    </WorkshopInfoStyled>
  );
}

WorkshopInfo.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};

// Styles
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
