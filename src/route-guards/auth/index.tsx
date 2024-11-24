import { useAuthContext } from "@/hooks/useContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to={"/"} />;
  }

  return children || <Outlet />;
};
