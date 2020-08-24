import React, { useContext } from "react";
import styled from "styled-components";
import Workshop from "./Workshop";
import WorkshopsContext from "../../context/WorkshopsContext";

//Workshop cards container
export default function WorkshopList() {
  // Using global workshops state
  const { workshops } = useContext(WorkshopsContext);
  //Render a Workshop with all attributes
  return (
    <WorkshopListStyled>
      {workshops.map(
        ({ level, name, instructor, date, description, link, image, _id }) => (
          <Workshop
            level={level}
            name={name}
            instructor={instructor}
            date={date.substr(0, 10)}
            description={description}
            link={link}
            image={image}
            key={_id}
          />
        )
      )}
    </WorkshopListStyled>
  );
}

// Styles
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
