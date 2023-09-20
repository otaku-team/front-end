import axios from "axios";
export const TRACE_MOE_QUERY = "https://api.trace.moe/search";

export const instance = axios.create({
  baseURL: TRACE_MOE_QUERY,
});

export const getAniList = async (linkData) => {
  const response = await instance.get(`?anilistInfo&url=${encodeURIComponent(`${linkData}`)}`);
  return response;
};

export const getTest = async () => {
  const response = await instance.get(`?anilistInfo&url=https://i3.ruliweb.com/ori/23/07/04/189205faf614d58a1.jpg`);
  return response;
};
