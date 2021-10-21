import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { AuthContextData } from "../types/auth.types";

export function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
