// Libs
import React, { createContext, useState, ReactNode } from "react";

// Api
import api from "../services/api";
import { AuthContextData, User } from "../types/auth.types";

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(email: string) {
    try {
      const { data }: { data: User } = await api.get(`start/${email}`);

      setUser(data);

      api.defaults.headers.authorization = `Bearer ${data.token}`;
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
