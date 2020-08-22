import axios from "axios";

//Assign base URL for api fetch
const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default clientAxios;
