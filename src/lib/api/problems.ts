import { apiClient } from "./client";

export interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  created_at: string;
}

export interface ProblemCreate {
  title: string;
  description: string;
  difficulty: string;
  category: string;
}

export const problemsApi = {
  async getProblems(skip = 0, limit = 100): Promise<Problem[]> {
    return apiClient.get<Problem[]>(`/problems?skip=${skip}&limit=${limit}`);
  },

  async getProblemById(id: number): Promise<Problem> {
    return apiClient.get<Problem>(`/problems/${id}`);
  },

  async createProblem(data: ProblemCreate): Promise<Problem> {
    return apiClient.post<Problem>("/problems", data);
  },

  async solveProblem(problemId: number): Promise<unknown> {
    return apiClient.post(`/problems/${problemId}/solve`);
  },

  async getMySolvedProblems(): Promise<Problem[]> {
    return apiClient.get<Problem[]>("/problems/solved/me");
  },
};
