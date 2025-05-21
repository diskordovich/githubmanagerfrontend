export interface Repository {
  id: string;
  name: string;
  owner: string;
  url: string;
  stars: number;
  forks: number;
  issues: number;
  repositoryCreatedAt: Date;
};
