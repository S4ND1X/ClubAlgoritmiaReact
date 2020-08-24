import React, { useState, useEffect } from "react";
import WorkshopsContext from "./WorkshopsContext";
import clientAxios from "../config/axios";
//Provider, where data is given and state

const WorkshopsProvider = (props) => {
  //Create state of context
  const [workshops, setWorkshops] = useState([]);

  const [filterPast, setFilterPast] = useState(false);
  const [filterUpcoming, setFilterUpcoming] = useState(false);

  //When component is loaded get workshops from api
  useEffect(() => {
    const getWorkshops = async () => {
      let filterURL = "";
      if (filterPast) {
        filterURL = "past";
      } else if (filterUpcoming) {
        filterURL = "upcoming";
      }
      const workshopsAPI = await clientAxios.get(`/api/workshops/${filterURL}`);

      setWorkshops(workshopsAPI.data.sort(compare));
    };
    getWorkshops();
  }, [filterPast, filterUpcoming]);

  //Function to sort them
  function compare(a, b) {
    if (Date.parse(a.date) < Date.parse(b.date)) return -1;
    if (Date.parse(a.date) > Date.parse(b.date)) return 1;
    return 0;
  }

  // Data that flows in in here
  return (
    <WorkshopsContext.Provider
      value={{
        workshops,
        filterPast,
        filterUpcoming,
        setFilterPast,
        setFilterUpcoming,
        setWorkshops,
      }}
    >
      {props.children}
    </WorkshopsContext.Provider>
  );
};

export default WorkshopsProvider;
