import React, { useState, useEffect } from "react";
import WorkshopsContext from "./WorkshopsContext";
import clientAxios from "../config/axios";

//Provider, where data is given and state
const WorkshopsProvider = (props) => {
  //Set state of global workshops
  const [workshops, setWorkshops] = useState([]);
  //Set global state of filters for endpoints
  const [filters, setFilters] = useState({ past: false, upcoming: false });

  //When component is loaded or filters changed get workshops from api
  useEffect(() => {
    const getWorkshops = async () => {
      //Set api endpoint depending on filters
      let filterURL;
      if (filters.past) {
        filterURL = "past";
      } else if (filters.upcoming) {
        filterURL = "upcoming";
      } else {
        filterURL = "";
      }
      //Fetch api for workshops and wait for response
      const workshopsAPI = await clientAxios.get(`/api/workshops/${filterURL}`);

      //Set fetched workshops in chronological order
      setWorkshops(workshopsAPI.data.sort(compare));
    };
    //Then call the function
    getWorkshops();
  }, [filters]);

  //Function to sort workshops by date
  function compare(a, b) {
    return Date.parse(a.date) < Date.parse(b.date) ? -1 : 1;
  }

  // Data flows trought the app
  return (
    <WorkshopsContext.Provider
      value={{
        workshops,
        filters,
        setFilters,
        setWorkshops,
      }}
    >
      {props.children}
    </WorkshopsContext.Provider>
  );
};

export default WorkshopsProvider;
