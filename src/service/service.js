import axios from "axios";

export const randomSrvc = async () => {
  const url = "https://randomuser.me/api/";
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};
