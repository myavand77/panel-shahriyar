// Types
export type UserRole = "Admin" | "Provider" | "User";

export interface UserData {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface User {
  sub: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  name: string;
  email: string;
  email_verified: boolean;
  role: UserRole;
}

export interface AuthContextType {
  access_token: string | null;
  setAuthFromOtp: (tokens: AuthTokens) => void;
  logout: () => void;
  loading: boolean;
  user: User | null;
}
