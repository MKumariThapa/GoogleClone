import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyCW_XKmLs1PH4k4CpSBUyhcCHF2oZx2DsQ",
  cx: "e32d195a3884d484e",
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
