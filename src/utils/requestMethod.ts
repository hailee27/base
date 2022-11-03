import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_API;

export const httpRequest = axios.create({
  baseURL: BASE_URL,
});
