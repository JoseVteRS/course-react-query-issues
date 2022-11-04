import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
