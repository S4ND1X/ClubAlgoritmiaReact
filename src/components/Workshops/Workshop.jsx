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

  @media screen and (max-width: 480px) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

function Workshop({ level, description, instructor, date, name, link, image }) {
  return (
    <WorkshopStyled>
      <WorkshopPreview
        image={image}
        level={level}
        description={description}
        instructor={instructor}
      >
        <WorkshopInfo date={date} name={name} link={link} />
      </WorkshopPreview>
    </WorkshopStyled>
  );
}

export default Workshop;
