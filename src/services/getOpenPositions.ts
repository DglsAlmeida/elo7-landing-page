import constants from "../constants";
import { api } from "./api";
const { API } = constants;

export const getOpenPositions = async () => {
  try {
    const { data } = await api.get(API.baseUrl);
    return data;
  } catch (err) {
    console.error(err);
  }
};
