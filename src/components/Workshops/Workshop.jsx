import React from "react";
import styled from "styled-components";

import WorkshopInfo from "./WorkshopInfo";
import WorkshopPreview from "./WorkshopPreview";

import PropTypes from "prop-types";

//Workshop card component
export default function Workshop({
  level,
  description,
  instructor,
  date,
  name,
  link,
  image,
}) {
  return (
    <WorkshopStyled>
      {/* Left side of workshop card */}
      <WorkshopPreview
        level={level}
        instructor={instructor}
        image={image}
        description={description}
      />
      {/* Right side of workshop card */}
      <WorkshopInfo date={date} name={name} link={link} />
    </WorkshopStyled>
  );
}

Workshop.propTypes = {
  level: PropTypes.string,
  description: PropTypes.string,
  instructor: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
};
Workshop.defaultProps = {
  level: "Uknown",
  description: "Uknown",
  instructor: "Club de Algoritmia",
  date: Date.now(),
  name: "Uknown",
  link:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bdbd0f9-5bfc-4047-8be6-cdc8ddb214cb/dcxx77c-29f79509-1b0a-4c24-b04e-a2ed4d238036.jpg/v1/fill/w_801,h_998,q_70,strp/ups____sorry__by_hepz14_dcxx77c-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjgwIiwicGF0aCI6IlwvZlwvNWJkYmQwZjktNWJmYy00MDQ3LThiZTYtY2RjOGRkYjIxNGNiXC9kY3h4NzdjLTI5Zjc5NTA5LTFiMGEtNGMyNC1iMDRlLWEyZWQ0ZDIzODAzNi5qcGciLCJ3aWR0aCI6Ijw9MTAyOCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NYX3T0C1YyuuONDDWrZsuPgjDXoDD78feYtW10usmfE",
  image:
    "https://rockfm-cdnmed.agilecontent.com/resources/jpg/4/5/1585755788054.jpg",
};

// Styles
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
