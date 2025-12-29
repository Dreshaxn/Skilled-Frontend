import { apiClient } from "./client";

export interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export const authApi = {
  async login(data: LoginRequest): Promise<TokenResponse> {
    return apiClient.post<TokenResponse>("/auth/login", data);
  },

  async register(data: RegisterRequest): Promise<User> {
    return apiClient.post<User>("/auth/register", data);
  },

  async getCurrentUser(): Promise<User> {
    return apiClient.get<User>("/auth/me");
  },

  async refreshToken(refreshToken: string): Promise<TokenResponse> {
    return apiClient.post<TokenResponse>("/auth/refresh", {
      refresh_token: refreshToken,
    });
  },

  async logout(refreshToken: string): Promise<void> {
    await apiClient.post("/auth/logout", {
      refresh_token: refreshToken,
    });
  },
};

// Token management helpers
export const tokenStorage = {
  setTokens(tokens: TokenResponse): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", tokens.access_token);
      localStorage.setItem("refresh_token", tokens.refresh_token);
    }
  },

  getAccessToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("access_token");
    }
    return null;
  },

  getRefreshToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("refresh_token");
    }
    return null;
  },

  clearTokens(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  },
};
