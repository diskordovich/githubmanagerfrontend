import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "~/utils/axiosClinet";
export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await axiosClient.post("/auth/login", data);
      console.log(response.data);
      return response.data;
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await axiosClient.post("/auth/register", data);
      console.log(response.data);
      return response.data;
    },
  });
};
