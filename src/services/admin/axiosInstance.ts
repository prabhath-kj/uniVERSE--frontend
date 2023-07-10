import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
});


api.interceptors.request.use(
  (config) => {
    config.headers.Authorization =`Bearer ${localStorage.getItem("adminAuth")}`;
    
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default api