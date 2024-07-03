import { DolciDTO } from "models/Dolci";
import { axiosInstance } from "utils/axios_interceptor";

export const addDolce = async (body: DolciDTO) => {
  return axiosInstance.post(`/dolci`, body);
};

export const getAllDolci = async () => {
  return axiosInstance.get(`/dolci`);
};

export const deleteDolce = async (id: string) => {
  return axiosInstance.delete(`/dolci/${id}`);
};


