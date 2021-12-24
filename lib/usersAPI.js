import axios from "axios";

export const GetUsers = async (dispatch, getState) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};
