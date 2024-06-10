import axios from "axios";

const api = axios.create({
  baseURL: "http://54.179.52.14:5000/",
});

export default api;
