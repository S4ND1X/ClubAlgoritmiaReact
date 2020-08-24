import React from "react";
import styled from "styled-components";

//Button to eventbrite link
export default function RegisterButton({ link }) {
  //On click send to eventrbrite link of workshop
  function handleClick() {
    window.open(link);
  }
  return (
    <RegisterButtonStyled onClick={handleClick}>
      Registrarme
    </RegisterButtonStyled>
  );
}

//Styles
const RegisterButtonStyled = styled.div`
  background-color: #1c87ad;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.35);
  }
  :active {
    transition: all 0.2s cubic-bezier(0.37, 0.26, 0.35, 1);
    transform: initial;
    box-shadow: none;
  }

  @media screen and (max-width: 560px) {
    font-size: 0.8em;
    padding: 10px 10px;
  } /* Small size */

  @media screen and (max-width: 480px) {
    font-size: 1em;
    padding: 10px 10px;
    position: unset;
  }
`;
