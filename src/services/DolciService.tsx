import { DolciDTO } from "models/Dolci";
import { axiosInstance } from "utils/axios_interceptor";

export const addDolce = async (body: DolciDTO) => {
  return axiosInstance.post(`/api/Dolci`, body);
};

export const getAllDolci = async () => {
  return axiosInstance.get(`/api/Dolci`);
};

export const deleteDolce = async (id: number) => {
  return axiosInstance.delete(`/api/Dolci/${id}`);
};


