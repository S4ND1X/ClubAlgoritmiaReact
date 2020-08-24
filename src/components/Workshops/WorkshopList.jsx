import React, { useContext } from "react";
import styled from "styled-components";
import Workshop from "./Workshop";

import WorkshopsContext from "../../context/WorkshopsContext";

const WorkshopListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media screen and (max-width: 1140px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1em;
  } /* Large size */
`;



//TODO destruct workshop
function WorkshopList() {
  // Using context of workshops
  const { workshops } = useContext(WorkshopsContext);

  return (
    <WorkshopListStyled>
      {workshops.map((workshop) => (
        <Workshop
          level={workshop.level}
          name={workshop.name}
          instructor={workshop.instructor}
          date={workshop.date.substr(0, 10)}
          description={workshop.description}
          link={workshop.link}
          image={workshop.image}
          key={workshop._id}
        />
      ))}
    </WorkshopListStyled>
  );
}

export default WorkshopList;
