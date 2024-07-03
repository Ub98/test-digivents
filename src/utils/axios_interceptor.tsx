import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    //QUA AGGINUGERE LOGICHE PER METTERE TOKEN OPPURE NO
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
