import React from "react";
import styled from "styled-components";

const WorkshopPreviewStyled = styled.div`
  h6 {
    opacity: 0.6;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    letter-spacing: 1px;
    margin: 10px 0;
    text-transform: uppercase;
  }
  background-image: url(${(props) => props.image});
  width: 100%;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 0.5),
    inset 0 0 0 1000px #1c86ada6;
  color: #fff;
  padding: 30px;

  a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    opacity: 0.8;
    margin-top: 30px;
    text-decoration: none;
  }

  @media screen and (max-width: 560px) {
    width: 50%;
    h6 {
      opacity: 0.6;
      margin: 0;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    h2 {
      letter-spacing: 1px;
      margin: 10px 0;
      font-size: 1.1em;
    }
  } /* Small size */

  @media screen and (max-width: 480px) {
    width: 100%;
    box-shadow: 0px 15px 15px -20px rgba(0, 0, 0, 0.5),
      inset 0 0 0 1000px #2a265f8a;
    height: 20%;
    h6 {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 0.8em;
    }

    h2 {
      letter-spacing: 1px;
      margin: 10px 0;
      font-size: 1.3em;
    }
  }
`;

export default function WorkshopPreview({
  image,
  level,
  description,
  instructor,
}) {
  return (
    <WorkshopPreviewStyled image={image}>
      <h6>{level}</h6>
      <h2>{description}</h2>
      <a href="#us-section">{instructor}</a>
    </WorkshopPreviewStyled>
  );
}
