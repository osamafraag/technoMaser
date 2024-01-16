import { axiosInstance } from "./config";

export const PermissionsData = (token) => {
  return axiosInstance.get('/api/admin/permissions', {
    headers: {"Authorization":token},
  });
};
export const PermissionData = (token,permissionId) => {
  return axiosInstance.get(`/api/admin/permissions/${permissionId}`, {
    headers: {"Authorization":token},
  });
};
export const AddPermission = (token,form) => {
    return axiosInstance.post('/api/admin/permissions', form,{
      headers: {"Authorization":token},
    });
  };
export const EditPermission = (token,permissionId,form) => {
    return axiosInstance.put(`/api/admin/permissions/${permissionId}`, form,{
      headers: {"Authorization":token},
    });
  };
  export const DeletePermission = (token,permissionId) => {
    return axiosInstance.delete(`/api/admin/permissions/${permissionId}`, {
      headers: {"Authorization":token},
    });
  };