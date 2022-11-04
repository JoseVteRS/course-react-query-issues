import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
