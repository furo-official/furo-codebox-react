import axios from "axios";

export const authAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.furo.one",
  auth: {
    username: process.env.REACT_APP_FURO_PID,
    password: process.env.REACT_APP_FURO_PUBLIC_API_KEY,
  },
});

export const authenticate = async (code) => {
  const {
    data: { access_token: accessToken, refresh_token: refreshToken },
  } = await authAPI.post("/sessions/code/authenticate", {
    code,
  });
  return { accessToken, refreshToken };
};

export const signup = async (email, password) => {
  try {
    const response = await authAPI({
      method: "POST",
      url: `/passwords`,
      data: {
        email,
        password,
        projectId: process.env.REACT_APP_FURO_PID,
      },
    });
    return { response: response, error: null };
  } catch (err) {
    return { response: null, error: err };
  }
};

export const login = async (email, password) => {
  try {
    const response = await authAPI.post("/passwords/authenticate", {
      email,
      password,
      projectId: process.env.REACT_APP_FURO_PID,
    });
    return {
      code: response.data.code,
      error: null,
    };
  } catch (err) {
    return {
      code: null,
      error: err,
    };
  }
};
