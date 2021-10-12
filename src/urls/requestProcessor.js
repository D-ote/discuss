import axios from "axios";
import { BASE_URL } from "./config";

axios.defaults.baseURL = BASE_URL;

export const RequestProcessor = async ({ url, method, payload }) => {
  try {
    const res = await axios({ url, method, payload });
    return res;
  } catch (error) {
    console.log(error);
  }
};
