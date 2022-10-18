import axios from "redaxios";
import constants from "../constants";

const { API } = constants;

export const api = axios.create({
  baseURL: API.baseUrl,
});
