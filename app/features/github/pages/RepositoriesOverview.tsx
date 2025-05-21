import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function RepositoriesOverview() {
  const [repositoryUrl, setRepositoryUrl] = useState("");

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h3">Repositories Overview</Typography>
      <Box display="flex" gap={2} justifyContent="space-between">
        <TextField
          fullWidth
          label="Repository URL"
          value={repositoryUrl}
          onChange={(e) => setRepositoryUrl(e.target.value)}
        />
        <Button variant="contained" color="primary">
          Add Repository
        </Button>
      </Box>
    </Box>
  );
}
