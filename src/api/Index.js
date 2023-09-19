import axios from "axios";

export const getAniList = async (linkData) => {
  const response = await instance.get(
    `?anilistInfo&url=${encodeURIComponent(`${linkData}`)}`
  );
  return response;
};
