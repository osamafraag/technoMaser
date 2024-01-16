import { axiosInstance } from "./config";

export const Logout = (token) => {
  return axiosInstance.post('/api/logout',{headers:{Authorization: token}})
};