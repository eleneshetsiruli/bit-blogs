import { PropsWithChildren, useState } from "react";
import { AuthContext } from ".";
import { User } from "@supabase/supabase-js";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleSetUser = (user: User) => {
    setUser(user);
  };
  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
