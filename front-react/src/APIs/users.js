import { axiosInstance } from "./config";

export const UsersData = (token) => {
  return axiosInstance.get('/api/admin/users', {
    headers: {"Authorization":token},
  });
};
export const UserData = (token,userId) => {
  return axiosInstance.get(`/api/admin/users/${userId}`, {
    headers: {"Authorization":token},
  });
};
export const AddUser = (token,form) => {
    return axiosInstance.post('/api/admin/users', form,{
      headers: {"Authorization":token},
    });
  };
export const EditUser = (token,userId,form) => {
    return axiosInstance.put(`/api/admin/users/${userId}`, form,{
      headers: {"Authorization":token},
    });
  };
  export const DeleteUser = (token,userId) => {
    return axiosInstance.delete(`/api/admin/users/${userId}`, {
      headers: {"Authorization":token},
    });
  };