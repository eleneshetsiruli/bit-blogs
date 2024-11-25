import { AuthContext, AuthContextType } from "@/context/auth";
import { useContext } from "react";

export const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("you must use auth context inside auth context");
  }
  return authContext as AuthContextType;
};
