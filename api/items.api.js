import axios from "axios";

export const getItems = async (next) => {
  const { data } = await axios.get(next);

  return data;
};
