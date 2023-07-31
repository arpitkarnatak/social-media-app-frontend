import axios from "axios";
import { REACT_APP_BACKEND_URL } from "./env";

export const api = axios.create({
  baseURL: REACT_APP_BACKEND_URL,
  timeout: 5000,
  withCredentials: true
});
