import axios from "axios";

export const get = async (URL) => {
  try {
    const response = await axios.get(URL);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    const responseData = error.response.data;
    return responseData;
  }
};
