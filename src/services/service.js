import axios from "axios";

const url = "";

export const getToken = async (token) => {
  let response;
  try {
    response = await axios.get(url);
    return await response.data;
  } catch (err) {
    if (!err?.response) {
      return "ERROR, No Server Response.";
    } else {
      // return  openNotificationWithIcon('error', 'ERROR', 'Category Fetch Failed')
    }
  }
};
