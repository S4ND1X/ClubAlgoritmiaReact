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
      <WorkshopPreview
        level={level}
        instructor={instructor}
        image={image}
        description={description}
      />
      <WorkshopInfo date={date} name={name} link={link} />
    </WorkshopStyled>
  );
}

export default Workshop;
