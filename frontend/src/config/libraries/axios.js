import axios from "axios";

const axiosClient = axios.create({
  // * Change after
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  // baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

export default axiosClient;
