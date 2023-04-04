import axios from "axios";

export const userAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.furo.one",
});

export const getUserInfo = async (accessToken) => {
  try {
    const response = await userAPI({
      method: "GET",
      url: `/sessions/userinfo`,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return { user: response.data, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};
