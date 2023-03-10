import axios from "axios";

export const getCategories = async (next) => {
  const { data } = await axios.get(next);

  return data;
};
