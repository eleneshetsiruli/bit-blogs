import { createContext, PropsWithChildren, useState } from "react";

export const AuthContext = createContext({ user: "User X" });

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState();

  const handleSetUser = (user) => {
    setUser(user);
  };
  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
