import React from "react";
import styled from "styled-components";

import WorkshopInfo from "./WorkshopInfo";
import WorkshopPreview from "./WorkshopPreview";

const WorkshopStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;

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

  .course-preview {
    width: 100%;
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 0.5),
      inset 0 0 0 1000px #1c86ada6;
    color: #fff;
    padding: 30px;
  }

  .course-preview a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    opacity: 0.8;
    margin-top: 30px;
    text-decoration: none;
  }

  @media screen and (max-width: 560px) {
    .course-preview {
      width: 50%;
    }
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
    text-align: center;
    .course-preview {
      width: 100%;
      box-shadow: 0px 15px 15px -20px rgba(0, 0, 0, 0.5),
        inset 0 0 0 1000px #2a265f8a;
      height: 20%;
    }
    display: flex;
    flex-direction: column;
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

function Workshop({ level, description, instructor, date, name, link, image }) {
  return (
    <WorkshopStyled>
      <WorkshopPreview level={level} instructor={instructor} image={image} description={description}/>
      <WorkshopInfo date={date} name={name} link={link} />
    </WorkshopStyled>
  );
}

export default Workshop;
