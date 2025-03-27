import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/repos";

export const fetchIssues = async (repoUrl: string) => {
  const repoPath = repoUrl.replace("https://github.com/", "");
  const response = await axios.get(`${GITHUB_API_URL}/${repoPath}/issues?per_page=5`);
  return response.data;
};
