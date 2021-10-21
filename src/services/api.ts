import axios from "axios";

const api: any = axios.create({
  baseURL: "https://sofit-mobile-challenge.herokuapp.com/",
});

export default api;
