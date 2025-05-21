import { Box, Typography, Button } from "@mui/material";
import type { Repository } from "../repository.types";

interface RepositoryCardProps {
  repository: Repository;
  updateRepository: (repositoryId: string) => void;
  deleteRepository: (repositoryId: string) => void;
}

export function RepositoryCard({
  repository,
  updateRepository,
  deleteRepository,
}: RepositoryCardProps) {
  const handleUpdateRepository = () => {
    updateRepository(repository.id);
  };

  const handleDeleteRepository = () => {
    deleteRepository(repository.id);
  };

  return (
    <Box>
      <Typography>Name: {repository.name}</Typography>
      <Typography>Owner: {repository.owner}</Typography>
      <Typography>URL: {repository.url}</Typography>
      <Typography>Stars: {repository.stars}</Typography>
      <Typography>Forks: {repository.forks}</Typography>
      <Typography>Issues: {repository.issues}</Typography>
      <Typography>
        Created At:{" "}
        {new Date(repository.repositoryCreatedAt).toLocaleDateString()}
      </Typography>
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateRepository}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteRepository}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
} 