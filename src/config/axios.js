import axios from "axios";

//Assign base URL for api fetch
const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    origin: process.env.REACT_APP_ORIGIN_ACCESS,
  },
});

export default clientAxios;
