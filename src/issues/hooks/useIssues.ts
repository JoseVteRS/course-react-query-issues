import { useQuery } from "@tanstack/react-query";
import { sleep } from "src/helpers/sleep";
import { githubApi } from "../../api/githubApi";
import { Issue } from "../interfaces/issue";

const getIssues = async (): Promise<Issue[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Issue[]>("/issues");
  return data;
};

export const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues);

  return issuesQuery;
};
