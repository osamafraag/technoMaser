import { axiosInstance } from "./config";

export const RolesData = (token) => {
  return axiosInstance.get('/api/admin/roles', {
    headers: {"Authorization":token},
  });
};
export const RoleData = (token,roleId) => {
  return axiosInstance.get(`/api/admin/roles/${roleId}`, {
    headers: {"Authorization":token},
  });
};
export const AddRole = (token,form) => {
    return axiosInstance.post('/api/admin/roles', form,{
      headers: {"Authorization":token},
    });
  };
export const EditRole = (token,roleId,form) => {
    return axiosInstance.put(`/api/admin/roles/${roleId}`, form,{
      headers: {"Authorization":token},
    });
  };
  export const DeleteRole = (token,roleId) => {
    return axiosInstance.delete(`/api/admin/roles/${roleId}`, {
      headers: {"Authorization":token},
    });
  };
  export const AssignRole = (token,form) => {
    return axiosInstance.post(`/api/admin/role`,form ,{
      headers: {"Authorization":token},
    });
  };
  export const UserRoles = (token,id) => {
    return axiosInstance.get(`/api/admin/userRoles/${id}`,{
      headers: {"Authorization":token},
    });
  };