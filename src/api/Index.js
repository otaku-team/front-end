import axios from "axios";
export const TRACE_MOE_QUERY = "https://api.trace.moe/search";

export const instance = axios.create({
  baseURL: TRACE_MOE_QUERY,
});

export const getAniList = async (linkData) => {
  const response = await instance.get(
    `?anilistInfo&url=${encodeURIComponent(`${linkData}`)}`
  );
  return response;
};

export const getTest = async (imageUrl) => {
  const response = await instance.get(`?anilistInfo&url=${imageUrl}`);
  return response;
};
