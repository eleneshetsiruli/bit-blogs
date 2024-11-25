import { Session } from "@supabase/supabase-js";
import { createContext } from "react";

export interface AuthContextType {
  user: Session | null;
  handleSetUser: (user: Session | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
