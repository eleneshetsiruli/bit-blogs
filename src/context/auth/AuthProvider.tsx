import { PropsWithChildren, useState } from "react";
import { AuthContext } from ".";
import { Session } from "@supabase/supabase-js";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<Session | null>(null);

  const handleSetUser = (user: Session | null) => {
    setUser(user);
  };
  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
