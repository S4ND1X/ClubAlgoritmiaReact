import React, { useState, useEffect } from "react";
import WorkshopsContext from "./WorkshopsContext";
import clientAxios from "../config/axios";
//Provider, where data is given and state

const WorkshopsProvider = (props) => {
  //Create state of context
  const [workshops, setWorkshops] = useState([]);

  //When component is loaded get workshops from api
  useEffect(() => {
    const getWorkshops = async () => {
      const workshopsAPI = await clientAxios.get("/api/workshops");
      setWorkshops(workshopsAPI.data);
    };
    getWorkshops();
  }, []);

  // Data that flows in in here
  return (
    <WorkshopsContext.Provider
      value={{
        workshops,
        setWorkshops,
      }}
    >
      {props.children}
    </WorkshopsContext.Provider>
  );
};

export default WorkshopsProvider;
