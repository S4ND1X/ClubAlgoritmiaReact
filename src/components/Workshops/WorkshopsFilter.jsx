import React, { useContext } from "react";
import styled from "styled-components";
import WorkshopsContext from "../../context/WorkshopsContext";

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
function WorkshopsFilter() {
  const {
    filterPast,
    filterUpcoming,
    setFilterPast,
    setFilterUpcoming,
  } = useContext(WorkshopsContext);

  const handleChange = (e) => {
    if (e.target.name === "past") {
      setFilterPast(!filterPast);
    } else if (e.target.name === "upcoming") {
      setFilterUpcoming(!filterUpcoming);
    }
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

export default WorkshopsFilter;
