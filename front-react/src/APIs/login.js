import { axiosInstance } from "./config";

export const Login = (form) => {
  return axiosInstance.post('/api/login',form);
};