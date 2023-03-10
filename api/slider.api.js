import axios from "axios";

export const getSliders = async () => {
  const { data } = await axios.get(
    "https://api-task.bit68.com/en/api/slider_image/"
  );

  return data;
};
