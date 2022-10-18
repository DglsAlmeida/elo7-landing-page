import constants from "../constants";

const { API } = constants;

import axios from "axios";

export const api = axios.create({
  baseURL: API.baseUrl,
});
