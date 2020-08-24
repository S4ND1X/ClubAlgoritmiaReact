import React, { useContext } from "react";
import styled from "styled-components";
import WorkshopsContext from "../../context/WorkshopsContext";

import PropTypes from "prop-types";

//Workshops filtering checkboxes
export default function WorkshopsFilter() {
  const { filters, setFilters } = useContext(WorkshopsContext);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  return (
    <WorkshopsFilterStyled>
      <div className="filter">
        <label htmlFor="past">Past Workshops</label>
        <input type="checkbox" name="past" id="past" onChange={handleChange} />
      </div>
      <div className="filter">
        <label htmlFor="upcoming">Upcoming</label>
        <input
          type="checkbox"
          name="upcoming"
          id="upcoming"
          onChange={handleChange}
        />
      </div>
    </WorkshopsFilterStyled>
  );
}

WorkshopsFilter.propTypes = { filters: PropTypes.object };

//Styles
const WorkshopsFilterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .filter {
    margin-right: 2em;
  }
  .filter label {
    margin-right: 0.5em;
  }

  .filter:last-of-type {
    margin-right: 0;
  }
`;
