import axios from "axios";

export const getBrands = async (next) => {
  const { data } = await axios.get(next);

  return data;
};
