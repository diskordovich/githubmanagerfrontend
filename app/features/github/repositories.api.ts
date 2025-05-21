import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosClient } from "~/utils/axiosClinet";
import type { Repository } from "./repository.types";

export const useGetRepositories = () => {
  return useQuery<Repository[], Error>({
    queryKey: ["repositories"],
    queryFn: () => axiosClient.get("/github/repositories").then((res) => res.data),
  });
};

export const useAddRepository = () => {
  return useMutation<Repository, Error, string>({
    mutationFn: (url: string) => axiosClient.post("/github/repository", { url }).then((res) => res.data),
  });
};

export const useDeleteRepository = () => {
  return useMutation<Repository, Error, string>({
    mutationFn: (repositoryId: string) => axiosClient.delete(`/github/repository/${repositoryId}`).then((res) => res.data),
  });
};

export const useUpdateRepository = () => {
  return useMutation<Repository, Error, string>({
    mutationFn: (repositoryId: string) => axiosClient.put(`/github/repository/${repositoryId}`).then((res) => res.data),
  });
};
