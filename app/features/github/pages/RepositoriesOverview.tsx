import { Box, Typography, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
  useGetRepositories,
  useAddRepository,
  useDeleteRepository,
  useUpdateRepository,
} from "../repositories.api";
import type { Repository } from "../repository.types";
import { RepositoryCard } from "../components/RepositoryCard";

export default function RepositoriesOverview() {
  const [repositoryUrl, setRepositoryUrl] = useState("");

  const [repositories, setRepositories] = useState<Repository[]>([]);

  const { data: repositoriesData, isLoading } = useGetRepositories();

  const { mutate: addRepository, data: addRepositoryData } = useAddRepository();
  const { mutate: deleteRepository, data: deleteRepositoryData } =
    useDeleteRepository();
  const { mutate: updateRepository, data: updateRepositoryData } =
    useUpdateRepository();

  const handleChangeRepositoryUrl = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepositoryUrl(e.target.value);
  };

  const handleAddRepository = async () => {
    setRepositoryUrl("");
    addRepository(repositoryUrl);
  };

  useEffect(() => {
    if (repositoriesData) {
      setRepositories(repositoriesData);
    }
  }, [repositoriesData]);

  useEffect(() => {
    if (addRepositoryData) {
      setRepositories([...repositories, addRepositoryData]);
    }
  }, [addRepositoryData]);

  useEffect(() => {
    if (deleteRepositoryData) {
      setRepositories(
        repositories.filter(
          (repository) => repository.id !== deleteRepositoryData.id
        )
      );
    }
  }, [deleteRepositoryData]);

  useEffect(() => {
    if (updateRepositoryData) {
      setRepositories(
        repositories.map((repository) =>
          repository.id === updateRepositoryData.id
            ? updateRepositoryData
            : repository
        )
      );
    }
  }, [updateRepositoryData]);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h3">Repositories Overview</Typography>
      <Box display="flex" gap={2} justifyContent="space-between">
        <TextField
          fullWidth
          label="Repository URL"
          value={repositoryUrl}
          onChange={handleChangeRepositoryUrl}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddRepository}
        >
          Add Repository
        </Button>
      </Box>
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
          updateRepository={updateRepository}
          deleteRepository={deleteRepository}
        />
      ))}
    </Box>
  );
}