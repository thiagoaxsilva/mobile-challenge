export interface User {
  _id: string;
  email: string;
  token: string;
}

export interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn: (email: string) => Promise<void>;
  signOut: () => void;
}
